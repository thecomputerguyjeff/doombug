import React, {Component} from "react";

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            author: {
                username: "",
                firstname: "",
            },
            replies: [],
            ups: [],
            downs: [],
            createDate: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (

            <form>

                <h3>New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                           id="username"
                           placeholder="Enter Title of Post"/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea type="textarea" maxLength="140"
                              rows="7" className="form-control"
                              id="content"
                              placeholder="Enter Content of Post"/>
                </div>

                <button type="submit" onClick={this.handleSubmit} onSubmit
                        className="btn btn-dark btn-lg btn-block">Post
                </button>
            </form>
        );
    }
}