import {Route, Switch} from "react-router-dom";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUp";
import EditAccount from "./components/EditAccount";
import Feed from "./components/Feed";
import Post from "./components/NewPost";
import React from "react";
import NewPost from "./components/NewPost-class";
import Tryit from "./components/Tryit";
import TryN from "./components/TryN2";
import Replies from "./components/Reply";
import WriteReplies from "./components/Reply";


export const Routes = (props) => {

    return (

        <Switch>

            <Route exact path='/' component={() => <Login setUser={props.setUser}
                                                          setToggleLogInSignUp={props.setToggleLogInSignUp}
                                                          toggleLogInSignUp={props.toggleLogInSignUp}
            />}/>

            <Route path="/sign-in" component={() => <Login setUser={props.setUser}
                                                           setToggleLogInSignUp={props.setToggleLogInSignUp}
                                                           toggleLogInSignUp={props.toggleLogInSignUp}
            />}/>

            <Route path="/sign-up" component={() => <SignUp setUser={props.setUser}
                                                            setToggleLogInSignUp={props.setToggleLogInSignUp}
                                                            toggleLogInSignUp={props.toggleLogInSignUp}
            />}/>

            <Route path="/edit-account" component={() => <EditAccount setUser={props.setUser} user={props.user}/>}/>

            <Route path="/try5" component={() => <Feed setUser={props.setUser} user={props.user} firstname = {props.firstname}
            setPosts={props.setPosts} posts={props.posts} setRetPosts={props.setRetPosts} retPosts={props.retPosts}
            post={props.post} setPost={props.setPost} setCont={props.setCont} content={props.content}
            setCreateDate={props.setCreateDate} createDate={props.createDate}
            id={props.id} setId={props.setId} author={props.author} setAuthor={props.setAuthor}/>} />

            <Route path="/newPost" component={() => <NewPost setUser={props.setUser} user={props.user} content={props.content}
            setCont={props.setCont} redirect={props.redirect} setRedirect={props.setRedirect} posts={props.posts}
            setPosts={props.setPosts}/>} />
            <Route path="/try" component={()=> <Tryit/>}/>
            <Route path="/tryN" component={()=> <TryN/>}/>
            <Route path="/replies/" component={(props)=> <Replies {...props} />}/>
            {/*    <Route path="/replies" component={()=> <Replies content={props.content} setCont={props.setCont}*/}
            {/*    createDate={props.createDate} setCreateDate={props.setCreateDate}/>}/>*/}
            <Route  component={()=> <WriteReplies posts={props.posts}/>}/>
                {/*<Route  path="/replies" component={()=> <Replies createDate={props.createDate} content={props.content}/>}/>*/}

        </Switch>
    )
};