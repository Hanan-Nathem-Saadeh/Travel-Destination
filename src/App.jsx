import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tours from "./components/tours/Tours";
const data = require('./data/data.json');

export default function App() {
  return (
   <>
 <Header />
 <Tours tours={data}/>
 <Footer />
 </>
  )
}