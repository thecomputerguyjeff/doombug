import React, {Component, useEffect, useState} from "react";
import {post} from "../helper/Fetch";
import {Redirect} from "react-router-dom";
import {Button} from "reactstrap";

const NewPost = (props) =>{


    const username = props.username;
    const firstname = props.firstName;

    let redirect = false;
    let title = "";
    let content = "";
    let author = "";
    let replies = [];
    let ups = [];
    let downs = [];
    let createDate = "";



    const renderRedirect = () => {
        if (props.redirect) {
            return <Redirect to='/feed' />
        }
    }

    // useEffect(() => {
    //     if (props.redirect) {
    //         props.setRedirect(false);
    //     }
    // }, [props.redirect])

    const handleContentChange = (e, key) => {
        content = e.target.value;

    };
    const handleTitleChange = (e, key) => {
        title = e.target.value;

    };

    const handleSubmit = (e) => {
        //e.preventDefault();



        if (content === "") {
            console.log(content);
        } else {
            post("api/v1/saveNewPost", {

                    title: title,
                    content: content,
                    author: JSON.parse(localStorage.getItem('user')).firstName
                }
            )
                .then((response) => {
                    console.log(response);

                    //props.setRedirect(true);
                    window.location.href="/try5"






                })
                .catch(err => {
                    console.log(err);
                });
        }




    }


    return (


        <div className={"container"}>
            {renderRedirect()}
            <form>

                <h3>New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                           id="title"
                           placeholder="Enter Title of Post" onChange={(e) => handleTitleChange(e, title)}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea type="textarea"
                              rows="7" className="form-control"
                              id="content"
                              placeholder="Enter Content of Post"
                              onChange={(e) => handleContentChange(e, content)}/>
                </div>

                <button  onClick={()=>{handleSubmit()}}
                        className="btn btn-dark btn-lg btn-block">Post
                </button>
            </form>


        </div>
    );



}
export default NewPost
