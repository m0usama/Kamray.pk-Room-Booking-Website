import React, { Component } from "react";



const Room = (props) => {

    const mystyle ={
        display: 'flex',
        flexDirection: 'row'
    }

    return (

        <>
            <div className="col-lg-4 col-sm-6">
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



class Items extends Component{


   render=()=>{

      const list =[
       {"imgurl": "./image/room1.jpg", "title": "Book Now", "description": "Double Deluxe Room", "price": "$250", "bookfor": "/night"} ,
          {"imgurl": "./image/room2.jpg", "title": "Book Now", "description": "Single Deluxe Room", "price": "$200", "bookfor": "/night"},
          {"imgurl": "./image/room3.jpg", "title": "Book Now", "description": "Honeymoon Suit", "price": "$750", "bookfor": "/night"},
          {"imgurl": "./image/room4.jpg", "title": "Book Now", "description": "Economy Double", "price": "$200", "bookfor": "/night"},
      ]

       return (
           <section className="accomodation_area section_gap">


                   <div className="row mb_30">

                               {list.map(romE => (<Room elem={romE}/>))}

                   </div>

           </section>

       )

   }

}
export default Items;