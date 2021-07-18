import React, {Component} from "react";
import {post} from "../helper/Fetch";
import {Link, NavLink, Redirect} from "react-router-dom";
import {Button, Card, CardColumns, CardLink, CardText, CardTitle} from "reactstrap";

export default class Post extends Component {

    constructor(props) {
        super(props);
        const username = this.props.username;
        const firstname = this.props.firstName;
        const title = this.props.title;
        const content = this.props.content;

    }




    render() {
        return (

            <Card body outline color="primary">
                {/*<CardTitle tag="h5">{this.props.title}</CardTitle>*/}
                {/*<CardText>{this.props.content}</CardText>*/}
                {/*<Button color="secondary">view</Button>*/}
                {/*recent posts*/}
        <form>
            <div className="post-page">

                <div>



                {/*recent posts*/}
                <div className="post-box" height="300">
                    <br styles="clear:both"/>


                    <div className="form-group">
                        <h6 className="author">Asked by {this.props.username}</h6>

                    <h6 className="time">{this.props.createDate}</h6>
                        <br styles="clear:both"/>
                        <div className="recent-post-textbox">
                            <h6 className="question">{this.props.content}</h6>
                        </div>
                        <div className="likes-dislikes">
                            <div className="likes" id={""}>
                                <img src="thumbs-up-emoji-png-1.jpg" alt="thumbs-up" width="40"
                                     height="40"/>
                                <br styles="clear:both"/>
                                2 Likes
                            </div>
                            <div className="dislikes">
                                <img src="Thumbs_Down_Sign_Emoji_Icon_ios10_large.png" alt="thumbs-down" width="30"
                                     height="30"/>
                                <br styles="clear:both"/>
                                0 Dislikes
                            </div>
                            <div className="answers">
                                3 Answers
                            </div>
                            <div className="views">
                                7 Views
                            </div>
                        </div>


                    </div>

                    <div>
                        <div className="reply-button">
                            <Button className="btn btn-dark btn-group-sm btn-block" onClick={()=>console.log("hey")}>Reply</Button>
                        </div>
                        <div className="share-button">
                            <button className="btn btn-dark btn-group-sm btn-block">Share</button>
                        </div>
                    </div>

                </div>

            </div>
            </div>
        </form>


             </Card>
         );
    }
}