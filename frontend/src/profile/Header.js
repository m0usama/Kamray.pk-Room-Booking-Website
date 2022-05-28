import React from "react";
import '../style.css';
import '../responsive.css';

const Header =()=> {
    return (
        <div>
            <header className="header_area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand logo_h" href="index.html"><img src="../images/Logo.png" alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">About us</a></li>
                                <li className="nav-item active"><a className="nav-link"
                                                                   href="accomodation.html">Accomodation</a></li>
                                <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                                <li className="nav-item submenu dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog
                                            Details</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="elements.html">Elemests</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;