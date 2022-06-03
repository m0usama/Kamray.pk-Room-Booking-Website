import Banner from "../banner/banner";
import Facilities from "../facilities/facilities";
import Items from "../search/items";
import Rooms from "../profile/Rooms";
import React from "react";

const Home = () =>{
    return(

        <>
              <Banner></Banner>
            <section className="about_history_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d_flex align-items-center">
                            <div className="about_content ">
                                <h2 className="title title_color">TRAVEL LIKE<br/>NEVER BEFORE</h2>
                                <p>Short trip to Islamabad or an adventure up north – book a Roomy at your favorite location. We understand that travel is personal so we make it an easy, feel-good hotel experience for everyone.</p>
                                <a href="/rooms" className="button_hover theme_btn_two">Try Us Out!</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={"https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} alt="img"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_history_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="img"/>
                        </div>

                        <div className="col-md-6 d_flex align-items-center">
                            <div className="about_content ">
                                <h2 className="title title_color">PLAN<br/>WITH US!</h2>
                                <p>Short trip to Islamabad or an adventure up north – book a Roomy at your favorite location. We understand that travel is personal so we make it an easy, feel-good hotel experience for everyone.</p>
                                <a href="/rooms" className="button_hover theme_btn_two">Try Us Out!</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="about_history_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d_flex align-items-center">
                            <div className="about_content ">
                                <h2 className="title title_color">DINE IN<br/>WITH US!</h2>
                                <p>A one-hour drive from Hindukush Sarai, the Kalash Valley is a popular tourist attraction for explorers from all around the world owing to the unique culture and traditions of its inhabitants, the Kalash people.</p>
                                <a href="/rooms" className="button_hover theme_btn_two">Try Us Out!</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="img"/>
                        </div>
                    </div>
                </div>
            </section>

            <Facilities></Facilities>

        </>
    )
}

export default Home