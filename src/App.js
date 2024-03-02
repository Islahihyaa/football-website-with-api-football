import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";

const App = () => {
  const activeMenu = true;
  return (
    <>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-primary">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div 
            className={`bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div 
              className="fixed md:static bg-main-bg w-full">
              <Navbar />
            </div>
          <div>
            <Routes>
              <Route path="/" element="inggris"/>
              <Route path="/ligaInggris" element="inggris"/>
              <Route path="/LigaItalia" element="Italia"/>
              <Route path="/LigaSpanyol" element="Spanyol"/>
              <Route path="/LigaJerman" element="jerman"/>
              <Route path="/LigaIndonesia" element="Indonesia"/>
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
