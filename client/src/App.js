import React, {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from "./components/Head";
import {Routes} from "./Routes";
import Login from "./components/LoginPage";
import { useRef } from 'react';

export let tra = "";

 const App = () => {


     const [content, setCont] = useState("");
     const [createDate, setCreateDate] = useState("");
     const[id, setId] = useState("");
     const[author, setAuthor]= useState("");
     const [post, setPost] = useState("");
    const [user, setUser] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [toggleLogInSignUp, setToggleLogInSignUp] = useState(true);
    const [posts, setPosts] = useState([]);
    const [retPosts, setRetPosts] = useState("");

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);


    return (

        <div className="App">

            <Head isLoggedIn={user !== ''} setUser={setUser} user={user} toggleLogInSignUp={toggleLogInSignUp}
                  setToggleLogInSignUp={setToggleLogInSignUp} redirect={redirect} setRedirect={setRedirect} posts={posts}
            setPosts={setPosts}/>
            <div className="outer">

                <div className="routes">


                    <Routes setUser={setUser} user={user} toggleLogInSignUp={toggleLogInSignUp}
                            setToggleLogInSignUp={setToggleLogInSignUp} posts={posts} setPosts={setPosts} setRetPosts={setRetPosts}
                    retPosts={retPosts} content={content} setCont={setCont} redirect={redirect} setRedirect={setRedirect}
                    createDate={createDate} setCreateDate={setCreateDate} post={post} setPost={setPost}
                    setId={setId} id={id} setAuthor={setAuthor} author={author}/>

                </div>
            </div>
        </div>

    );
};
export default App;