import React, { Component } from "react";
import './UStyle.css';
import Profile from "./Profile";


class ProfileList extends Component{
    render = () => {
        const profiles = [

        {   "username": "Zulqarnain",
            "email": "edogaru@mail.com.my",
            "profileimage": "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            "surname": "M. Ishaq",
            "mobilenumber": "+323424254234",
            "postcode": "564645",
            "state": "Lahore",
            "area": "karachi",
            "country": "Pakistan",
            "region": "Punjab",}
        ]

        return ( profiles.map(story => <Profile story={story} />
            )

        )
    }
}


export default ProfileList;