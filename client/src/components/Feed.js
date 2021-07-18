import React, {Component, useEffect} from "react";
import {Redirect} from "react-router-dom";
import './Feed.css';
import {Button, Card, CardColumns} from "reactstrap";
import {get} from "../helper/Fetch";
import Post from "./Post";


const Feed = (props) => {
    var buttonListElements = [], // Empty Array

        n = 5,
        i;
    const onChildButtonClick = (val) =>{
        console.log(val);
    }

    for(i = 0; i < n; i = i + 1) {
        // For each element, push a React element into the array


        buttonListElements.push(
            <li key={i}><button onClick={onChildButtonClick.bind(null, i)}></button></li>
        );
    }




    const getPosts = () => {

        get("api/v1/getAllPosts"
        ).then(res => {
            if (res.status === 200)
                return res.json();
            console.log(props.user);
            throw 'not 200'

        })
            .then((response) => {

                props.setPosts(response);



                props.setRetPosts(props.posts.map((_item, _index) => { // Note: represent function body, normal javascript function
                    return(

                        <Post

                        key={_index}
                        title={_item.title}
                        content={_item.content}
                        createDate = {_item.createDate}
                        username = {_item.author}
                    />
                    );
                }));




            })
            .catch(err => {
                console.log(err)

            });
    }


getPosts()





    function createMarkup() {

        return {__html: 'First &middot; Second'}; }

//loop

    return (

        <div className={"feed-container"}>
            <CardColumns>
                {/*<div dangerouslySetInnerHTML={createMarkup()} />*/}
                {props.retPosts}
                {buttonListElements}

            </CardColumns>

        </div>


    );




}
export default Feed





