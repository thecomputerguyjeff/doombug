import React, {Component} from "react";
import {post} from "../helper/Fetch";
import {Redirect} from "react-router-dom";

export default class NewPost extends Component {

    constructor(props) {
        super(props);
        const username = this.props.username;
        const firstname = this.props.firstName;
        this.state = {
            redirect: false,
            title: "",
            content: "",
            author: {
        username,
                firstname,
            },
            replies: [],
            ups: [],
            downs: [],
            createDate: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();



        if (this.state.title.localeCompare("") === 0 || this.state.content.localeCompare("") === 0) {

        } else {
            post("api/v1/saveNewPost", {
                    title: this.state.title,
                    content: this.state.content,
                    author: this.state.author
                }
            )
                .then((response) => {

                    this.setState({
                        redirect: true
                    });




                })
                .catch(err => {

                });
        }
    }
    handleFieldChange = (e, key) => {
        this.setState({
            [key]: e.target.value,

        });
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/feed' />
        }
    }

    render() {
        return (
            <div className={"container"}>
            <form>

                <h3>New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                           id="title"
                           placeholder="Enter Title of Post"
                           onChange={(e) => this.handleFieldChange(e, 'title')}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea type="textarea" maxLength="140"
                              rows="7" className="form-control"
                              id="content"
                              placeholder="Enter Content of Post"
                              onChange={(e) => this.handleFieldChange(e, 'content')}/>
                </div>
                {this.renderRedirect()}
                <button type="submit" onClick={this.handleSubmit}
                        className="btn btn-dark btn-lg btn-block">Post
                </button>

            </form>
            </div>
        );
    }
}