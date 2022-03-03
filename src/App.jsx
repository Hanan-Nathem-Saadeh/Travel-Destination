import React from 'react';
import TourDetails from "./components/TourDetails/TourDetails";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import data from  "./data/data.json";

function App() {
    return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="city/:id" element={<TourDetails data={data} />} />
  </Routes>

    );
}
export default App; 