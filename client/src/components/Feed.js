import React, {Component, useEffect} from "react";
import {Redirect} from "react-router-dom";
import './Feed.css';
import {Button} from "reactstrap";
import {get} from "../helper/Fetch";
import Post from "./Post";


const Feed = (props) => {




    useEffect(() => {
        getPosts();




    }, []);




    const getPosts = () => {

        get("api/v1/getAllPosts"
        ).then(res => {
            if (res.status === 200)
                return res.json();
            throw 'not 200'
        })
            .then((response) => {

               props.setPosts(response);
                props.setRetPosts(props.posts.map((_item, _index) => { // Note: represent function body, normal javascript function
                    return <Post
                        key={_index}
                        title={_item.title}
                        content={_item.content}
                    />;
                }));




            })
            .catch(err => {
                console.log(err)

            });
    }




    return (

        <div>
            {props.retPosts}

        </div>


    );




}
export default Feed





