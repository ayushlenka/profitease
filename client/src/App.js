import React from "react";
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage";
import StockX from "./pages/StockXCalculator";
import Goat from "./pages/GoatCalculator";
import StockXVsGoat from "./pages/StockXvsGoatCalculator";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className={"bodyBackground"}>
          <Routes>
              <Route path="/" element = {<Homepage />} />
              <Route path="/calculators/StockX" element = {<StockX />} /> 
              <Route path="/calculators/GOAT" element = {<Goat />} />
              <Route path="/calculators/StockXVsGOAT" element = {<StockXVsGoat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
