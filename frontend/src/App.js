import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./navbar/navbar";
import Banner from "./banner/banner";
import Footer from "./footer/footer";
import Facilities from "./facilities/facilities";
import Search from "./search/search";
import Pagination from "./pagination/pagination";
import About from "./about/about";
import Rooms from "./profile/Rooms";
import Profile from "./profile/Profile";
import ProfileList from "./profile/ProfileList";
import UpdateList from "./profile/UpdateList";
import React from 'react'
import Home from "./home/home";
import Cart from "./cart/cart";
import ForgotPass from "./forgotPass/ForgotPass";
import {Vote} from "./vote/Vote";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path='/search' element={<Search/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/rooms' element={<Rooms/>}/>
                <Route path='/profile' element={<ProfileList/>}/>
                <Route path='/updateprofile' element={<UpdateList/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/forgotPassword' element={<ForgotPass/>}/>
                <Route path='/Vote' element={<Vote/>}/>
            </Routes>
            <Pagination></Pagination>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
