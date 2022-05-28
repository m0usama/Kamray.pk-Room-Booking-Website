import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
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

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/search' element={<Search/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/rooms' element={<Rooms/>}/>
                <Route path='/profile' element={<ProfileList/>}/>
                <Route path='/updateprofile' element={<UpdateList/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <Pagination></Pagination>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
