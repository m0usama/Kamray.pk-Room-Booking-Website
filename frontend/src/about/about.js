import React from 'react';

function About() {
    return (
        <>


            <section class="breadcrumb_area">
                <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
                <div class="container">
                    <div class="page-cover text-center">
                        <h2 class="page-cover-tittle">About Us</h2>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li class="active">About</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section class="about_history_area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 d_flex align-items-center">
                            <div class="about_content ">
                                <h2 class="title title_color">About Us <br/>Our History<br/>Mission & Vision</h2>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                                <a href="#" class="button_hover theme_btn_two">Request Custom Price</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid" src="image/about_bg.jpg" alt="img"/>
                        </div>
                    </div>
                </div>
            </section>



        </>


    );
}

export default About;