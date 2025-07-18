import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Edit, Plus, LogOut, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface MediaItem {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  date_display: string;
  date_sort: string;
  created_at: string;
}

export default function Admin() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingItem, setEditingItem] = useState<MediaItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { signOut, user } = useAuth();
  const { toast } = useToast();

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateDisplay, setDateDisplay] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchMediaItems();
  }, []);

  const fetchMediaItems = async () => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .select('*')
        .order('date_sort', { ascending: false });

      if (error) throw error;
      setMediaItems(data || []);
    } catch (error) {
      console.error('Error fetching media items:', error);
      toast({
        title: "Erro ao carregar mídias",
        description: "Não foi possível carregar as mídias",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('media-images')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('media-images')
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = editingItem?.image_url || '';

      // Upload new image if selected
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      const mediaData = {
        title,
        description: description || null,
        image_url: imageUrl,
        date_display: dateDisplay,
        date_sort: new Date(dateDisplay).toISOString().split('T')[0],
        created_by: user?.id,
      };

      if (editingItem) {
        // Update existing item
        const { error } = await supabase
          .from('media_items')
          .update(mediaData)
          .eq('id', editingItem.id);

        if (error) throw error;
        toast({ title: "Mídia atualizada com sucesso!" });
      } else {
        // Create new item
        const { error } = await supabase
          .from('media_items')
          .insert(mediaData);

        if (error) throw error;
        toast({ title: "Mídia adicionada com sucesso!" });
      }

      // Reset form
      resetForm();
      setDialogOpen(false);
      fetchMediaItems();
    } catch (error) {
      console.error('Error saving media item:', error);
      toast({
        title: "Erro ao salvar mídia",
        description: "Não foi possível salvar a mídia",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const deleteItem = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta mídia?')) return;

    try {
      const { error } = await supabase
        .from('media_items')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Mídia excluída com sucesso!" });
      fetchMediaItems();
    } catch (error) {
      console.error('Error deleting media item:', error);
      toast({
        title: "Erro ao excluir mídia",
        description: "Não foi possível excluir a mídia",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDateDisplay('');
    setSelectedFile(null);
    setEditingItem(null);
  };

  const openEditDialog = (item: MediaItem) => {
    setEditingItem(item);
    setTitle(item.title);
    setDescription(item.description || '');
    setDateDisplay(item.date_display);
    setDialogOpen(true);
  };

  const openCreateDialog = () => {
    resetForm();
    setDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <p className="text-muted-foreground">Gerencie as mídias do site</p>
          </div>
          <div className="flex gap-4">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openCreateDialog}>
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Mídia
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {editingItem ? 'Editar Mídia' : 'Adicionar Nova Mídia'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Título</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateDisplay">Data de Exibição</Label>
                    <Input
                      id="dateDisplay"
                      value={dateDisplay}
                      onChange={(e) => setDateDisplay(e.target.value)}
                      placeholder="ex: Janeiro 2024"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Imagem</Label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      required={!editingItem}
                    />
                  </div>
                  <Button type="submit" disabled={uploading} className="w-full">
                    {uploading ? 'Salvando...' : (editingItem ? 'Atualizar' : 'Adicionar')}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.date_display}
                </p>
                {item.description && (
                  <p className="text-sm mb-4 line-clamp-3">{item.description}</p>
                )}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEditDialog(item)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteItem(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {mediaItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma mídia encontrada</p>
            <Button onClick={openCreateDialog} className="mt-4">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Primeira Mídia
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}