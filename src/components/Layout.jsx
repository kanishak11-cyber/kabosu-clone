import React from "react";

import Footer from "./Footer";

import Tokenomics from "./Tokenomics";

import Roadmap from "./Roadmap";
import Join from "./Join";
import Contact from "./Contact";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      
      
      <Tokenomics />
     
      <Roadmap />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
