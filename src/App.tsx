import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import Address from "./pages/Address";
import MinisterioRochinha from "./pages/MinisterioRochinha";
import Ativadores from "./pages/Ativadores";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Registration from "./pages/Registration";
import History from "./pages/History";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/horarios" element={<Schedule />} />
          <Route path="/endereco" element={<Address />} />
          <Route path="/ministerio-rochinha" element={<MinisterioRochinha />} />
          <Route path="/ativadores" element={<Ativadores />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/historia" element={<History />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;