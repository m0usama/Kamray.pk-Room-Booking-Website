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

    unreport = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    doLike = () => {
        this.setState({like: !this.state.like})
    }

    render() {
        return (
            <div>
                <section className="breadcrumb_area">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                         data-background=""></div>

                </section>
                <div className="container">
                    <h2>Did You Like Service of Kamray.pk</h2>
                    <br/>
                    <hr/>
                    <button className="genric-btn danger" onClick={this.doLike}>{this.state.like ? "Unlike" : "Like"}
                    </button>
                    <h3 onClick={this.doLike}>{this.state.like ? "Unlike" : "Like"}</h3>


                </div>

            </div>
        );
    }
}
