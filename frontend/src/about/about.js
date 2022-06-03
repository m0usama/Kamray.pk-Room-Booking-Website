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
                            <li><a href="/home">Home</a></li>
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
                                <h2 class="title title_color">Contact Us</h2>
                                <p>Set within a private and secure space. Tucked away in a our hotel is the perfect escape for you. With cozy bedrooms, a spacious family lounge, dining area, and kitchen, you’ll feel perfectly at home!</p>
                                <p><strong>Email : </strong>contact@kamray.com <br/><strong>Phone Number : </strong>+92-322-4433324</p>

                                <a href="tel:+92-322-4433324" class="button_hover theme_btn_two">Call Us!</a>
                                &nbsp;
                                &nbsp;
                                <a href="mailto: contact@kamray.com" className="button_hover theme_btn_two">Email Us!</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid" src={"https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="img"/>
                        </div>
                    </div>
                </div>
            </section>



        </>


    );
}

export default About;