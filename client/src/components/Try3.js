import React, {Component} from "react";
import Post from "./Post2";
import {get} from "../helper/Fetch";
import {CardColumns} from "reactstrap";
import Head from "./Head";
import {Redirect} from "react-router-dom";
import * as ReactDOM from "react-dom";
import ReactDom from "react-dom";

export default class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };


        //this.getPosts = this.getPosts.bind(this);
    }

    async getPosts() {
        const res = await get("api/v1/getAllPosts");
        const data = await res.json();
        console.log(data);
        return data;

    }

    async componentDidMount() {
        this.mounted = true;
        const users = await this.getPosts();
        if(this.mounted) {
        this.setState({ users });
        //this.props.setPosts(users);
    }this.mounted = false;
    }


    componentWillUnmount(){

this.mounted = false;
    }
   // async componentDidUpdate() {
   //      const users = await this.getPosts();
   //      if(this.mounted) {
   //          this.setState({ users });
   //          //this.props.setPosts(users);
   //      }
   //  }
    // getChartState() {
    //     return {
    //         users: this.state.users
    //
    //     }
    // }

scape(){
    this.mounted = false;
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    window.location.href="/newPost";
}


    render() {
        return (
            <>
                <button onClick={()=>this.scape()}>gby</button>
            <CardColumns id = "posts">
                {this.state.users.map((user, index) => (

                    <Post
                        key={index}
                        title={user.title}
                        content={user.content}
                        createDate = {user.createDate}
                        username = {user.author}


                    />
                ))}

            </CardColumns>
            </>

        );

    }

}
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

