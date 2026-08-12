import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Guides } from "./pages/Guides";
import { Components } from "./pages/Components";
import { Showcase } from "./pages/Showcase";
import "./styles/pages.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/*" element={<Guides />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/*" element={<Components />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
