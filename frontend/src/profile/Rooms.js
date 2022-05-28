import React, { Component } from "react";
import Booking from "../booking/booking";



const Room = (props) => {

    const mystyle ={
        display: 'flex',
        flexDirection: 'row'
    }

    return (

        <>
            <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                    <div className="hotel_img">
                        <img src={props.elem.imgurl} alt="room2"/>
                        <a href="#" className="btn th-eme_btn button_hover">{props.elem.title}</a>
                    </div>
                    <a href="#"><h4 className="sec_h4">{props.elem.description}</h4></a>
                    <h5>{props.elem.price}<small>{props.elem.bookfor}</small></h5>
                </div>
            </div>


        </>

    );
}



class Rooms extends Component{


    render=()=>{

        const list =[
            {"imgurl": "./image/room1.jpg", "title": "Book Now", "description": "Double Deluxe Room", "price": "$250", "bookfor": "/night"} ,
            {"imgurl": "./image/room2.jpg", "title": "Book Now", "description": "Single Deluxe Room", "price": "$200", "bookfor": "/night"},
            {"imgurl": "./image/room3.jpg", "title": "Book Now", "description": "Honeymoon Suit", "price": "$750", "bookfor": "/night"},
            {"imgurl": "./image/room4.jpg", "title": "Book Now", "description": "Economy Double", "price": "$200", "bookfor": "/night"},
        ]

        const List2 = [
            {"imgurl": "./image/room1.jpg", "title": "Book Now", "description": "Double Deluxe Room", "price": "$250", "bookfor": "/night"} ,
            {"imgurl": "./image/room2.jpg", "title": "Book Now", "description": "Single Deluxe Room", "price": "$200", "bookfor": "/night"} ,
            {"imgurl": "./image/room3.jpg", "title": "Book Now", "description": "Honeymoon Suit", "price": "$750", "bookfor": "/night"} ,
            {"imgurl": "./image/room4.jpg", "title": "Book Now", "description": "Economy Double", "price": "$200", "bookfor": "/night"} ,
            {"imgurl": "./image/room1.jpg", "title": "Book Now", "description": "Double Deluxe Room", "price": "$250", "bookfor": "/night"} ,
            {"imgurl": "./image/room2.jpg", "title": "Book Now", "description": "Single Deluxe Room", "price": "$200", "bookfor": "/night"} ,
            {"imgurl": "./image/room3.jpg", "title": "Book Now", "description": "Honeymoon Suit", "price": "$750", "bookfor": "/night"} ,
            {"imgurl": "./image/room4.jpg", "title": "Book Now", "description": "Economy Double", "price": "$200", "bookfor": "/night"} ,
        ]
        return (
            <>
                <div>
                    <section className="breadcrumb_area">
                        <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                             data-background=""></div>
                        <div className="container">
                            <div className="page-cover text-center">
                                <h2 className="page-cover-tittle">Rooms</h2>
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Rooms</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                </div>
            <section className="accomodation_area section_gap">


                <div className="row mb_30">

                    {list.map(romE => (<Room elem={romE}/>))}

                </div>

            </section>

            <Booking></Booking>

                <section className="accomodation_area section_gap">


                    <div className="row mb_30">

                        {List2.map(romE => (<Room elem={romE}/>))}

                    </div>

                </section>

            </>

        )

    }

}
export default Rooms;