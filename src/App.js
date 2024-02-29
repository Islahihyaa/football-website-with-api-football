import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, Sidebar } from "./components";
import { Competition } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <section>
          <Competition />
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
