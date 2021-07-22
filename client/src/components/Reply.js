import React, {Component, useEffect, useState} from "react";
import {get, post} from "../helper/Fetch";
import {Redirect} from "react-router-dom";
import {Button, Card} from "reactstrap";
import './Feed.css';
import logo2 from './Thumbs_Down_Sign_Emoji_Icon_ios10_large.png';
import logo from '../thumbs-up-emoji-png-1.jpg'; // relative path to image

let content = "";
let rContent="";
let id = "";
let postcontent = "";
let author = "";
class Replies extends Component{

constructor(props){
    super(props);
    this.state = {
        renderBox: false,
//use app props to pass info
        id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
        postcontent : this.props.location ? this.props.location.state.content : null,
        date :this.props.location ? this.props.location.state.createDate : null,
        author :this.props.location ? this.props.location.state.username : null,
        post: ""
    };
    this._isMounted = false;
    this.getRandomUsers = this.getRandomUsers.bind(this);
    console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
id = this.props.location ? this.props.location.state.id : null;

}
    async getRandomUsers(id) {
        if (this._isMounted) {
            const res = await post("api/v1/getPost", id);
            const data = await res.json();
            return data;
        }
    }
    async componentDidMount() {
        this._isMounted = true;
        if (this._isMounted){
            const post = await this.getRandomUsers(this.state.id);
            let array = post.replies;

            console.log("bla", array);

            this._isMounted && this.setState({ post: post });
        }

    }
    async componentDidUpdate(prevState, prevProps){
        if (this._isMounted){
            const post = await this.getRandomUsers(this.state.id);
            let array = post.replies;

            console.log("bla", array);

            this._isMounted && this.setState({ post: post });
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    handleContentChange = (e, key) => {
        content = e.target.value;

    };
   async handleSaveChanges () {

        // Update changes to database.


console.log("boo");
        //if (content === "") {
let array = [];
       // } else {
       if (!this.state.post.replies){
           array = [];
       }
       else {
           array = this.state.post.replies;
       }

       array.push({content: content, author: JSON.parse(localStorage.getItem('user')).firstName});
console.log(array);
            post("api/v1/saveNewPost", {
                    id: this.state.id,
                    replies: array,
                    content: this.state.postcontent,
                title: "bla",

                author: this.state.author,
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
        // const res = await get("api/v1/getPost");
        // const data = await res.json();
        // console.log(data);
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
                        <h6 className="author">Asked by {this.state.author}</h6>
                        <h6 className="time">{this.state.date}</h6>
                        <br styles="clear:both"/>
                        <div className="recent-post-textbox">
                            <h6 className="question">{this.state.postcontent}</h6>
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
    { this.state.post.replies?.map((reply, index) => (
        <div className={"reply-container"}>


        <div className="post-page">




            {/*search bar*/}


            {/*recent posts*/}
            <div className="post-box" height="300">
                <br styles="clear:both"/>


                <div className="form-group">
                    <h6 className="author">Asked by {reply.author}</h6>
                    <h6 className="time">{this.props.createDate}</h6>
                    <br styles="clear:both"/>
                    <div className="recent-post-textbox">
                        <h6 className="question">{reply.content}</h6>
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


    </div>))}
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
