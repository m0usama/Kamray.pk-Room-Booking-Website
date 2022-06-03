import React from "react";
import Items from "../search/items";

const Room = (props) => {

    const mystyle ={
        display: 'flex',
        flexDirection: 'row'
    }

    return (

        <>
            <div className="container flex-row col-lg-12 col-sm-12 ">
                <div className="accomodation_item ">
                    <br/>
                    <div className="hotel_img" style={{width: "100px", height: "100px"}}>
                        <img src={props.elem.imgurl} alt="room2"/>
                        <a href="#" className="btn th-eme_btn button_hover">{props.elem.title}</a>
                    </div>
                    <a href="#"><h4 className="sec_h4">{props.elem.description}</h4></a>
                    <h5>{props.elem.price}<small>{props.elem.bookfor}</small></h5>
                </div>

            </div>
            <hr/>


        </>

    );
}

const Cart = () =>{
    const list =[
        {"imgurl": "./image/room1.jpg", "title": "Book Now", "description": "Double Deluxe Room", "price": "$250", "bookfor": "/night"} ,
        {"imgurl": "./image/room2.jpg", "title": "Book Now", "description": "Single Deluxe Room", "price": "$200", "bookfor": "/night"},
        {"imgurl": "./image/room3.jpg", "title": "Book Now", "description": "Honeymoon Suit", "price": "$750", "bookfor": "/night"},
        {"imgurl": "./image/room4.jpg", "title": "Book Now", "description": "Economy Double", "price": "$200", "bookfor": "/night"},
    ]
    return(

        <>
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                     data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Cart</h2>
                        <ol className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li className="active">Cart</li>
                        </ol>
                    </div>
                </div>
            </section>


            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <section className="container">
                            <div className="row mb_30">
                                {list.map(romE => (<Room elem={romE}/>))}
                            </div>
                        </section>

                    </div>
                        <div className="col-lg-3">
                            <div className="container shadow-sm">
                                <br/>
                                <h4>Apply Vouchers</h4>
                                <br/>

                                <div className="switch-wrap d-flex justify-content-between ">
                                    <h4>Summer Offer</h4>
                                    <div className="primary-switch" >
                                        <input type="checkbox" id="default-switch"/>
                                        <label htmlFor="default-switch"></label>
                                    </div>
                                </div>

                                <br/>
                                <br/>
                                <br/>
                                <button type={"submit"} className="genric-btn danger" >
                                    Checkout
                                </button>
                                <br/>
                                <br/>

                            </div>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Cart