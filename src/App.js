import React from "react";
import StyledGlobal from "./style/Global";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Produtos from "./Components/Produtos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <StyledGlobal />
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" end element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
