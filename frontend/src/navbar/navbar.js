import logo from './logo.png';
import Modellogin from "./modellogin";
import React, {useState} from "react";
import Modelsignup from "./modelsignup";
import {Link} from "react-router-dom";
const Navbar = () => {
    const [model1 , setModel1] = useState(false);
    const getData1 = () =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return setModel1(true);
    }

    const [model2 , setModel2] = useState(false);
    const getData2 = () =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return setModel2(true);
    }
    return (
        <div>

            <header className="header_area shadow-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        {/*Brand and toggle get grouped for better mobile display*/}
                        <a className="navbar-brand logo_h" href="index.html"><img src={logo} alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/*Collect the nav links, forms, and other content for toggling*/}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <Link to="/home" ><li className="nav-item active"><a className="nav-link" href="">Home</a></li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/about"><li className="nav-item"><a className="nav-link" href="">About us</a></li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/rooms"><li className="nav-item"><a className="nav-link" href="">Rooms</a> </li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/vote"><li className="nav-item"><a className="nav-link" href="">Review</a> </li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                {/*<Link to="/about"><li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>*/}
                                {/*<li className="nav-item submenu dropdown">*/}
                                {/*    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"*/}
                                {/*       aria-haspopup="true" aria-expanded="false">Blog</a>*/}
                                {/*    <ul className="dropdown-menu">*/}
                                {/*        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>*/}
                                {/*        <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog*/}
                                {/*            Details</a></li>*/}
                                {/*    </ul>*/}
                                {/*</li>*/}
                                <Link to="/profile"><li className="nav-item"><a className="nav-link" href="contact.html">Profile</a></li></Link>                                                                                &nbsp;&nbsp;
                                <Link to="/cart"><li className="nav-item"><a className="nav-link" href="contact.html">Cart</a></li></Link>                                                                                &nbsp;&nbsp;

                                <li className="nav-item"><a className="nav-link"  onClick={() => getData2()}>Sign Up</a></li>
                                <li className="nav-item"><a className="nav-link"  onClick={() => getData1()}>Log In</a></li>


                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {
                model1 === true ? <Modellogin hide={() => setModel1(false)}/> : ''

            }
            {
                model2 === true ? <Modelsignup hide={() => setModel2(false)}/> : ''
            }


        </div>
    )
}
export default Navbar
