import React, { useState, Component } from 'react';

export const StateMethod = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Using the State Hook</h2>
            <p>You reported {count} times</p>
            {count >= 10 ? <div className="alert alert-danger">You cannot report more than 10 times</div> :
                <button onClick={() => setCount(count + 1)}>
                    Report post
                </button>
            }
        </div>
    )
}

export class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            like: false,
        }
    }
    report = () => {
        // if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 })
        // }
    }
    doLike = () => {
        this.setState({like: !this.state.like})
    }
    render() {
        return (
            <div >
                <section className="breadcrumb_area">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                         data-background=""></div>
                    <div className="container">
                        <div className="page-cover text-center">
                            <h2 className="page-cover-tittle">Review</h2>
                            <ol className="breadcrumb">
                                <li><a href="/home">Home</a></li>
                                <li className="active">Review</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="gallery_area section_gap">
                    <div className="container">
                        <div className="section_title text-center">
                            <h2 className="title_color">Royal Hotel Gallery</h2>
                            <p>Who are in extremely love with eco friendly system.</p>
                        </div>
                        <div className="row imageGallery1" id="gallery">
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/01.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/01.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/02.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/02.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/03.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/03.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/04.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/04.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/06.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/05.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/05.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/06.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/01-1.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/01-1.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/02-1.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/02-1.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 gallery_item">
                                <div className="gallery_img">
                                    <img src="image/gallery/03-1.jpg" alt=""/>
                                        <div className="hover">
                                            <a className="light" href="image/gallery/03-1.jpg"><i
                                                className="fa fa-expand"></i></a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <h2>Did You Like Service of Kamray.pk</h2>
                    <br/>
                    <button className="genric-btn danger" onClick={this.doLike}>{this.state.like ? "Unlike" : "Like"}
                    </button>
                    <p onClick={this.doLike}>{this.state.like ? "Liked" : "Unliked"}</p>


                </div>

            </div>
        );
    }
}
