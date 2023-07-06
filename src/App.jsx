import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Aos from "aos";
import { Header } from "./components";

const App = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 h-screen grid grid-rows-3 max-sm:grid-rows-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
