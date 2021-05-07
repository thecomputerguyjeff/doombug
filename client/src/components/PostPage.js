import React, {Component} from "react";
import {Alert} from 'reactstrap';
import {post} from "../helper/Fetch";
import './PostPage.css';

export default class PostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: "",
            author: "",
            time: "",
            tags: [],
            answers: [],
            views: [],
            likes: "",
            dislikes: ""
        };
    }

    render() {
        return (
            <form>
                <div className="post-page">
                    {/*search bar*/}
                    <div className="search-bar">
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Search posts..."
                            name="s"
                        />
                        <button type="button" id="submit" name="submit" className="search-button">Search</button>
                    </div>
                    {/*make a post*/}
                    <div className="add-post">
                        <br styles="clear:both"/>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   id="title" name="title" placeholder="Title"/>
                        </div>
                        <div className="form-group">
                                    <textarea className="form-control"
                                              type="textarea" id="subject" placeholder="Subject" maxLength="140"
                                              rows="7"/>
                        </div>
                        <button type="button" id="submit" name="submit"
                                className="btn btn-dark btn-group-sm btn-block">Post
                        </button>
                    </div>
                    {/*recent posts*/}
                    <div className="post-box" height="300">
                        <br styles="clear:both"/>
                        <h4>Recent Posts</h4>

                        <div className="form-group">
                            <h6 className="author">Asked by author</h6>
                            <h6 className="time">Posted at 12:00</h6>
                            <br styles="clear:both"/>
                            <div className="recent-post-textbox">
                                <h6 className="question">This is a post.</h6>
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

                            <div className="tags">
                                <div className="tags">
                                    <a href="dummy-link" className="post-tag"
                                       title="show questions tagged &#39;tag1&#39;" rel="tag">tag1</a>
                                    <a href="dummy-link" className="post-tag"
                                       title="show questions tagged &#39;tag2&#39;" rel="tag">tag2</a>
                                    <a href="dummy-link" className="post-tag"
                                       title="show questions tagged &#39;tag3&#39;" rel="tag">tag3</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reply-button">
                            <button className="btn btn-dark btn-group-sm btn-block">Reply</button>
                            </div>
                            <div className="share-button">
                            <button className="btn btn-dark btn-group-sm btn-block">Share</button>
                            </div>
                        </div>

                    </div>

                </div>
            </form>
        );
    }
}



