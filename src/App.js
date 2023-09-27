import { Route, Routes, Router } from "react-router-dom";

import Navbar from "./Navbar";
import Home from './component/Home';
import Services from './component/Services';
import Career from './component/Career';
import Contact from './component/Contact';
import About from './component/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

    </>
  );
}

export default App;
