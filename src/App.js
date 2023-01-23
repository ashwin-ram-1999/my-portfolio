import React from "react";
import "./index.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-portfolio" element={<Home />} />
        <Route path="/my-portfolio/contact" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
