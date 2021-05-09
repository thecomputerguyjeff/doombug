import React, {Component} from "react";
import {Redirect} from "react-router-dom";

export default class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    handleRedirect = () => {
        this.setState({
            redirect: true,
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/post' />
        }
    }


    render() {

        return (

            <form>

                <h3>Feed</h3>

                {this.renderRedirect()}
                <button type="submit" onClick={this.handleRedirect} className="btn btn-dark btn-lg btn-block">
                    New Post
                </button>

            </form>
        );
    }
}
