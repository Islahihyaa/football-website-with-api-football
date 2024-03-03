import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import EnglishLeague from "./pages/EnglishLeague";
import SpainLeague from "./pages/SpainLeague";
import FranceLeague from "./pages/FranceLeague";
import GermanLeague from "./pages/GermanLeague";
import ItalyLeague from "./pages/ItalyLeague";
import IndonesiaLeague from "./pages/IndonesiaLeague";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const activeMenu = useStateContext();
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
            <div className="navbar fixed md:static bg-main-bg w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<EnglishLeague />} />
                <Route path="/ligaInggris" element={<EnglishLeague />} />
                <Route path="/LigaPrancis" element={<FranceLeague />} />
                <Route path="/LigaSpanyol" element={<SpainLeague />} />
                <Route path="/LigaJerman" element={<GermanLeague />} />
                <Route path="/LigaItalia" element={<ItalyLeague />} />
                <Route path="/LigaIndonesia" element={<IndonesiaLeague />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
