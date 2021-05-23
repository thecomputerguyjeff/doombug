import React, {Component} from "react";
import {Alert} from "reactstrap";
import {post} from "../helper/Fetch";

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            title: "",
            content: "",
            author: {
                username: "",
                firstname: "",
            },
            replies: [],
            likes: [],
            dislikes: [],
            createDate: "",
            blankTitle: false,
            blankContent: false
        };
    }

    handleFieldChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            blankTitle: false,
            blankContent: false
        })
    }

    handlePost = (e) => {
        e.preventDefault();

        const{
            title,
            content,
        } = this.state

        let data = {
            title: this.state.title,
            content: this.state.content,
            author: {
                username: this.state.user.username,
                firstname: this.state.user.firstName
            },
            replies: [],
            likes: [],
            dislikes: [],
            createDate: null,
        }

        if(title.localeCompare("") === 0) {this.setState({blankTitle: true})}
        if(content.localeCompare("") === 0) {this.setState({blankContent: true})}


        else{
            fetch(process.env.REACT_APP_BACKEND_URL + "api/v1/post", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'no-cors',
                credentials: 'include',
            })
        .then(res => {
            if(res.status === 200)
                return res.json();
            throw 'not 200'
            }).then(() => {
                window.location.href = "/feed"
            }).catch(err => {
                this.setState({repostPrompt: true});
            });
        }
    }

    render() {
        return (

            <form>

                <h3>New Post</h3>
                <div className="form-group">
                    {this.state.blankTitle && <Alert color="danger">
                        Enter Post Title
                    </Alert>
                    }
                    <label>Title</label>
                    <input type="text" title="Enter Title of Post" name="title" className="form-control"
                           onChange={this.handleFieldChange}
                           id="title" placeholder="Enter Title of Post"/>
                </div>
                <div className="form-group">
                    {this.state.blankContent && <Alert color="danger">
                        Enter Post Content
                    </Alert>
                    }
                    <label>Content</label>
                    <textarea type="textarea" maxLength="140"
                              rows="7" className="form-control"
                              id="content" title="Enter Content of Post" name="content"
                              onChange={this.handleFieldChange} placeholder="Enter Content of Post"/>
                </div>

                <button type="submit" onClick={this.handlePost}
                        className="btn btn-dark btn-lg btn-block">Post
                </button>
            </form>
        );
    }
}




