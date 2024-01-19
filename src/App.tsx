import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import HotCourses from "./pages/HotCourses";
import Universities from "./pages/Universities";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/hot-courses" element={<HotCourses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
