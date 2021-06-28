import React, {Component} from "react";
import {post} from "../helper/Fetch";
import {Redirect} from "react-router-dom";

export default class Post extends Component {

    constructor(props) {
        super(props);
        const username = this.props.username;
        const firstname = this.props.firstname;
        const title = this.props.title;
        const content = this.props.content;

    }




    render() {
        return (
            <div className={"feed-container"}>
                <form>
                    <div className="form-group">
                        <label>{this.props.title}</label>
                    </div>
                    <div className="form-group">
                      <p>{this.props.content}</p>
                    </div>

                </form>
            </div>
        );
    }
}