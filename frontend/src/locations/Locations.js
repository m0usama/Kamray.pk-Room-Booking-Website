import React from "react";

const Hotels = (props) => {

    const mystyle ={
        display: 'flex',
        flexDirection: 'row'
    }

    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d_flex align-items-center">
                        <div className="about_content ">
                            <h2 className="title title_color">{props.elem.title}</h2>
                            <p>{props.elem.description}</p>
                            <a href={props.elem.maplocs} className="button_hover theme_btn_two">Location</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={props.elem.imgurl} alt="img"/>
                    </div>
                </div>
                <hr/>
            </div>



        </>

    );
}

const Locations = () =>{
    const list =[
        {"imgurl": "https://www.geo.tv/assets/uploads/updates/2019-10-07/250280_3456926_updates.jpg", "title": "Islamabad", "description": "Located in F-6, Roomy Signature hotel in Islamabad is the ideal hotel stay for families and solo travelers alike. From thematically designed rooms to a central location preserving the peace and vibrancy of the city, Signature offers the perfect home base to those searching for the best hotels in Islamabad.", "maplocs": "https://www.google.com/maps/place/Roomy+Signature+Hotel,+Islamabad/@33.7285037,73.0754338,17z/data=!3m1!4b1!4m8!3m7!1s0x38dfbf522722bb11:0x48798a3bf75ea851!5m2!4m1!1i2!8m2!3d33.7285037!4d73.0754338"} ,
        {"imgurl": "https://www.thenews.com.pk/assets/uploads/akhbar/2020-09-14/714663_7550852_murre_akhbar.jpg", "title": "Murree", "description": "Situated in Upper Jhika Gali, The Roomy Lodge is a private escape from the busy roads of Murree Hills. With expansive views, a serene, clean environment and Roomy’s warm hospitality, it is the perfect weekend getaway for families and solo travelers.", "maplocs": "https://www.google.com/maps/place/WC53%2BG2J+The+Roomy+Lodge,+Upper+Jhika+Gali+Road,+Murree,+Rawalpindi,+Khyber+Pakhtunkhwa/data=!4m2!3m1!1s0x38dfd7def4856f6d:0xf91436c682f2d64f?utm_source=mstt_1&entry=gps"},
        {"imgurl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9f/bc/57/hunza-serena-inn.jpg?w=900&h=-1&s=1", "title": "Hunza", "description": "Located in main Karimabad, Daastaan is for travelers looking to connect with local culture and experience hotels in Hunza that offer more than just a place to stay. With a scenic view of Diran, Lady Finger and Rakaposhi peaks and main Karimabad bazaar a 5-minute walk away, Roomy Daastaan puts travelers in the center of Hunza Valley’s most popular tourist attractions.", "maplocs": "https://www.google.com/maps/place/Roomy+Daastaan+Hotel/@36.317671,74.669075,17z/data=!3m1!4b1!4m8!3m7!1s0x38e8a1b7cac97f49:0x4fcf058ef7133cd2!5m2!4m1!1i2!8m2!3d36.317671!4d74.669075"},
        {"imgurl": "https://chitraltoday.net/wp-content/uploads/2021/05/chitral.jpg", "title": "Chitral", "description": "Located at the center of Chitral, the Roomy Hindukush Sarai is a small property perfect for a scenic escape into the mountains. With a traditional wooden facade and all modern amenities in place, the Sarai offers comfort as well as easy access to Chitral's most famous tourist attractions.", "maplocs": "https://www.google.com/maps/place/Roomy+Hindukush+Sarai+Chitral,+Chitr%C4%81l,+Chitral,+Khyber+Pakhtunkhwa/data=!4m2!3m1!1s0x38db53087385889b:0x424fc7be979480de?utm_source=mstt_1&entry=gps"},
    ]
    return(

        <>
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                     data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Locations</h2>
                        <ol className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li className="active">Locations</li>
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
                                {list.map(romE => (<Hotels elem={romE}/>))}
                            </div>
                        </section>

                    </div>
                    <div className="col-lg-3">
                        <div className="container shadow-sm">
                            <br/>
                            <h4>TRAVEL LIKE<br/>
                                NEVER BEFORE</h4>
                            <br/>

                            <p>Short trip to Islamabad or an adventure up north – book a Roomy at your favorite location. We understand that travel is personal so we make it an easy, feel-good hotel experience for everyone.</p>
                            <br/>
                            <br/>

                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

        </>
    )
}

export default Locations