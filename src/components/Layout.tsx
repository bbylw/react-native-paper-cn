import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="rnp-layout">
      <Navbar />
      <main className="rnp-main">{children}</main>
      <Footer />
    </div>
  );
};
