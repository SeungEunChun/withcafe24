import * as React from "react";
import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
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
import SearchForm from './Components/SearchForm'
import Prodetail from "./Components/prodetail";
import Result from "./Components/Result";


import review from './data/review.json'
import award from "./data/award.json"






function App() {

  const [totalpro, settotal] = useState(null);

  useEffect(() => {
    //get
    const dbstore = async (rtc) => {
      const [r, t, cate = 'all'] = rtc.split("/");

      try {
        const result = await axios.get(`/${rtc}`);
        settotal((prestate) => ({
          ...prestate,
          [t]: [...result.data]
        }));
        console.log(totalpro)
      } catch (error) {
        console.log(error);
      }
    };

    dbstore("store/Scinic_Product");
    dbstore("store/Category");

  }, []);

  useEffect(() => {
    console.log(totalpro, totalpro && totalpro['Category'] && totalpro['Category'])
  }, [totalpro])


  return (
    <>
      <Header datasrc={totalpro && totalpro['Category'] && totalpro['Category']}></Header>
      <SearchForm datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']} />
      <Routes>
        <Route path="/" element={<section className='mainsec'>
          <Mainswiper></Mainswiper>
          <Sproduct datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']}></Sproduct>

          <div className="mb-5">
            <Scrollimg></Scrollimg>
            <Scrollimg2></Scrollimg2>
          </div>
          <Youtubev></Youtubev>
          <Product datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']} catesrc={totalpro && totalpro['Category'] && totalpro['Category']}></Product>
          <Mbenefit></Mbenefit>
          <Reviews datasrc={review.review}></Reviews>
          <Awards datasrc={award.award}></Awards>
        </section>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/brand" element={<Brandstory />}></Route>
        <Route path='/promotion' element={<Promotion />}></Route>
        <Route path='/product/:Category_no' element={<Store datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']} catesrc={totalpro && totalpro['Category'] && totalpro['Category']} />}></Route>
        <Route path='/detail/:id' element={<Prodetail datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']} />}>

        </Route>
        <Route path="/result/s/:keyword" element={<Result />}></Route>
        {/* 주소 경로가 매치되지 않는경우 404페이지 반환 */}
        {/* <Route path="*" element={"../../publish/nopage.html"} /> */}

        {/* /store 뒤에 인자를 지속적으로 확인하여 json으로 페이지가 보여지는것을 막음   //아직 안됨 */}
        {/* <Route path="/product/*" element={<StoreRedirect />} /> */}
      </Routes>

      <Footer></Footer>


    </>
  );
}

export default App;