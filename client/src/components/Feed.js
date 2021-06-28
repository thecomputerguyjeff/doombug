import React, {Component, useEffect} from "react";
import {Redirect} from "react-router-dom";
import './Feed.css';
import {Button} from "reactstrap";
import {get} from "../helper/Fetch";
import Post from "./Post";


const Feed = (props) => {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            posts: [],
            retPosts: ""


        };

    }


    useEffect(() => {
    getPosts();
    if (this._isMounted) {
    this.setState({
                      retPosts: (this.state.posts.map(
(_item, _index) => { // Note: represent function body, normal javascript function
    return <Post
key={_index}
title={_item.title}
content={_item.content}
/>;
}))
});
}
}, []);




    const getPosts = () => {

        get("api/v1/getAllPosts"
        ).then(res => {
            if (res.status === 200)
                return res.json();
            throw 'not 200'
        })
            .then((response) => {

                this.setState({
                    redirect: true
                });


                this.setState({
                    posts: response
                });
                console.log(response)


            })
            .catch(err => {
                this.setState({reloginPrompt: true});
                console.log(err)

            });
    }




        return (

            <div>
                {this.state.retPosts}

            </div>


        );

}





