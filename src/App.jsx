import React from 'react'
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Product from './compount/products/Product.jsx';
import Navbar from './compount/navbar/Navbar.jsx';
import Footer from './compount/footer/Footer.jsx';
import Home from './compount/home/Home.jsx';
import PageNotFound from './compount/pagenotfound/PageNotFound.jsx';
import Resturent from './compount/resturent/Resturent.jsx';
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<PageNotFound />}/>
      <Route path="/Product" element={<Product />}/>
      <Route path="/Resturent" element={<Resturent />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
