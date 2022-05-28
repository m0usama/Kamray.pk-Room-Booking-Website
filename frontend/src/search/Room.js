import React, {Component} from 'react';
import Breadcrumb from "../profile/Breadcrumb";


const Room = (props) => {

    const mystyle ={
        display: 'flex',
        flexDirection: 'row'
    }

    return (

        <>

            <Breadcrumb></Breadcrumb>
            <div className="hotel_img">
                <img src={props.elem.imgurl} alt="room2"/>
                <a href="#" className="btn th-eme_btn button_hover">{props.elem.title}</a>
            </div>
            <a href="#"><h4 className="sec_h4">{props.elem.description}</h4></a>
            <h5>{props.elem.price}<small>{props.elem.bookfor}</small></h5>

        </>

    );
}

export default Room;