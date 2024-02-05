import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import './css/index.scss'
import Mainswiper from './Components/Mainswiper';
import './data/Mainswiper.json'
import Sproduct from "./Components/Sproduct";
import Product from "./Components/Product";
import Scrollimg from "./Components/Scrollimg";
import Scrollimg2 from "./Components/Scrollimg2";
import Youtubev from './Components/Youtubev'
import Promotion from './Link/promotion';
import Mbenefit from "./Components/Mbenefit";
import Awards from "./Components/Awards";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Login from "./Link/Login";
import Brandstory from "./Link/brandstory";
import Store from './Link/Store';
// data
import Mainswipe from './data/Mainswiper.json';
import Products from './data/product.json'
import review from './data/review.json'
import award from "./data/award.json"



function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<section className='mainsec'>
          <Mainswiper datasrc={Mainswipe.mainbanner}></Mainswiper>
          <Sproduct datasrc={Products.product}></Sproduct>

          <div className="mb-5">
            <Scrollimg></Scrollimg>
            <Scrollimg2></Scrollimg2>
          </div>
          <Youtubev></Youtubev>
          <Product datasrc={Products.product}></Product>
          <Mbenefit></Mbenefit>
          <Reviews datasrc={review.review}></Reviews>
          <Awards datasrc={award.award}></Awards>
        </section>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/brand" element={<Brandstory />}></Route>
        <Route path='/promotion' element={<Promotion />}></Route>
        <Route path='/store/:Category_no' element={<Store />}></Route>

      </Routes>
      <Footer></Footer>


    </>
  );
}

export default App;
