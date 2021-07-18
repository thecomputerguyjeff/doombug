import React, {Component, useEffect, useState} from "react";
import {post} from "../helper/Fetch";
import {Redirect} from "react-router-dom";
import {Button, Card} from "reactstrap";
import './Feed.css';
import logo2 from '../';
import logo from '../thumbs-up-emoji-png-1.jpg'; // relative path to image

let content = "";
let rContent="";
class Replies extends Component{

constructor(props){
    super(props);
    this.state = {
        renderBox: false,

//use app props to pass info

    };
    console.log(this.props)

}


    handleContentChange = (e, key) => {
        content = e.target.value;

    };
    handleSaveChanges = () => {

        // Update changes to database.


console.log("boo");
        //if (content === "") {

       // } else {

            post("api/v1/saveNewPost", {
                    id: "60e6281e6d6b5e40fcb93dd7",
                    replies: [{content: "sdf", author: JSON.parse(localStorage.getItem('user')).firstName}],
                    content: ";a",
                title: "bla",

                author: "sdf"
                }
            ).then(res => {
                // if (res.status === 200)
                //     return res.json();
                // throw 'not 200'
            })
                .then(() => {

                })
                .catch(err => {
console.log(err)
                });
        //}

    };


render(){

    return (
<>

    { <div className={"reply-container"}>


            <div className="post-page">




                {/*search bar*/}


                {/*recent posts*/}
                <div className="post-box" height="300">
                    <br styles="clear:both"/>


                    <div className="form-group">
                        <h6 className="author">Asked by {this.props.match.params.author}</h6>
                        <h6 className="time">{this.props.match.params.createDate}</h6>
                        <br styles="clear:both"/>
                        <div className="recent-post-textbox">
                            <h6 className="question">{this.props.match.params.id}</h6>
                        </div>
                        <div className="likes-dislikes">
                            <div className="likes" id={""}>
                                <img src={logo} alt="thumbs-up" width="40"
                                     height="40"/>
                                <br styles="clear:both"/>
                                2 Likes
                            </div>
                            <div className="dislikes">
                                <img src={logo2} alt="thumbs-down" width="30"
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

                        {/*<div className="tags">*/}
                        {/*    <div className="tags">*/}
                        {/*        <a href="dummy-link" className="post-tag"*/}
                        {/*           title="show questions tagged &#39;tag1&#39;" rel="tag">tag1</a>*/}
                        {/*        <a href="dummy-link" className="post-tag"*/}
                        {/*           title="show questions tagged &#39;tag2&#39;" rel="tag">tag2</a>*/}
                        {/*        <a href="dummy-link" className="post-tag"*/}
                        {/*           title="show questions tagged &#39;tag3&#39;" rel="tag">tag3</a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div>
                        <div className="reply-button">
                            <button className="btn btn-dark btn-group-sm btn-block" onClick={()=>this.setState({
                               renderBox: true
                            })}>Reply</button>
                        </div>
                        <div className="share-button">
                            <button className="btn btn-dark btn-group-sm btn-block">Share</button>
                        </div>
                    </div>

                </div>

            </div>


</div>}
    { <div className={"reply-container"}>


        <div className="post-page">




            {/*search bar*/}


            {/*recent posts*/}
            <div className="post-box" height="300">
                <br styles="clear:both"/>


                <div className="form-group">
                    <h6 className="author">Asked by {this.props.author}</h6>
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

                    {/*<div className="tags">*/}
                    {/*    <div className="tags">*/}
                    {/*        <a href="dummy-link" className="post-tag"*/}
                    {/*           title="show questions tagged &#39;tag1&#39;" rel="tag">tag1</a>*/}
                    {/*        <a href="dummy-link" className="post-tag"*/}
                    {/*           title="show questions tagged &#39;tag2&#39;" rel="tag">tag2</a>*/}
                    {/*        <a href="dummy-link" className="post-tag"*/}
                    {/*           title="show questions tagged &#39;tag3&#39;" rel="tag">tag3</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <div>
                    <div className="reply-button">
                        <button className="btn btn-dark btn-group-sm btn-block" onClick={()=>this.setState({
                            renderBox: true
                        })}>Reply</button>
                    </div>
                    <div className="share-button">
                        <button className="btn btn-dark btn-group-sm btn-block">Share</button>
                    </div>
                </div>

            </div>

        </div>


    </div>}
    {this.state.renderBox && <div className={"container"}>
        {/*{renderRedirect()}*/}
        <div>

            <h3>Reply</h3>

            <div className="form-group">

                <textarea type="textarea"
                          rows="7" className="form-control"
                          id="rContent"
                          placeholder="Enter Content of Post"
                          onChange={(e) => this.handleContentChange(e, rContent)}/>
            </div>

            <button  onClick={()=>{this.handleSaveChanges()}}
                     className="btn btn-dark btn-lg btn-block">Post
            </button>
        </div>


    </div>}
</>

    );


}



}
export default Replies
