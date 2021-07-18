import {Component, useEffect} from "react";
import Post from "./Post2";
import {get} from "../helper/Fetch";
import {CardColumns} from "reactstrap";
let array = [];
let isSubscribed = true
const Feed =(props)=> {


    const getPosts = () => {
        get("api/v1/getAllPosts"
        ).then(res => {
            if (res.status === 200)
                return res.json();

            throw 'not 200'

        })
            .then((response) => {
                props.setPosts(response);
                array = props.posts;

                return response;


            })
            .catch(err => {
                console.log(err)

            });

    }
    // useEffect(() => {
    //     let mounted = true
    //     getPosts();
    //     if (mounted) {
    //         array = props.posts;
    //     }
    //     return () => {
    //         mounted = false
    //     }
    //
    // }, [])
    useEffect(() => {

        getPosts();

    }, [])
    // useEffect(() => {
    //
    //     getPosts();
    //
    // } )


    console.log(array);
    const onChildButtonClick = (val) =>{
        console.log("boo");
    }

    return (
        <>
            {<CardColumns id="posts">
                {array === [] ? 'Fetching employees...' : ''}
                {array?.map((user, index) => (

                    <Post
                        key={index}
                        title={user.title}
                        content={user.content}
                        createDate={user.createDate}
                        username={user.author}


                    />
                    // <button onClick={onChildButtonClick.bind(null, index)} >asdf </button>

                ))}

            </CardColumns>}
        </>
    );



}
export default Feed
const User = ({ name, avatar, email}) => {
    const onChildButtonClick = (val) =>{
        console.log(val);
    }
    return(
        <div>
            <img src={avatar} onClick={()=>console.log()} />
            <div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>);
}

