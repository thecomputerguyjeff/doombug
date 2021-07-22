import {Component} from "react";
import {get} from "../helper/Fetch";
import {Card, CardColumns} from "reactstrap";
import Post from "./Post2";
import {Redirect} from "react-router-dom";
import {tra} from "../App";
export default class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            redirect: false,
            color: ""
        };


        this._isMounted = false;
        this.getRandomUsers = this.getRandomUsers.bind(this);

    }

    async getRandomUsers() {
        if (this._isMounted) {
            const res = await get("api/v1/getAllPosts");
            const data = await res.json();
            return data;
        }
    }


    async componentDidMount() {
        this._isMounted = true;
        if (this._isMounted){
            const users = await this.getRandomUsers();
            console.log("bla", users);

            this._isMounted && this.setState({ users });
        }

    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    renderRedirect=(user)=>{

        if (this.state.redirect) {
            //this.props.setCont(user.content);

            //this.props.setCreateDate(user.createDate);
            //this.props.setId(user.id);
            //this.props.setAuthor(user.author);

            //console.log(this.props.content);
            console.log(user);

            // return <Redirect to={{
            //     pathname: "/replies",
            //     state: { content: user.content,
            //         username: user.author,
            //         createDate: user.createDate}
            // }}
            ///>
        }

    }

    render() {
        return (
            // <div>
            //     {this.state.users.map((user, index) => (
            //         <User
            //
            //             key={index}
            //             content={user.content}
            //         />
            //     ))}
            // </div>
            <div >
                <div >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                {/*{<CardColumns id="posts">*/}
                    {this.state.users === [] ? 'Fetching employees...' : ''}
                    {this.state.users?.map((user, index) => (

                        <Post
                            key={index}
                            title={user.title}
                            content={user.content}
                            createDate={user.createDate}
                            username={user.author}
                            replies={user.replies}
                            id = {user.id}


                        />


                            // <Card body outline color="primary" className={"card"}  key={index}>
                            //     {/*<CardTitle tag="h5">{this.props.title}</CardTitle>*/}
                            //     {/*<CardText>{this.props.content}</CardText>*/}
                            //     {/*<Button color="secondary">view</Button>*/}
                            //     {/*recent posts*/}
                            //     <div>
                            //         <div className="post-page">
                            //
                            //             <div>
                            //
                            //
                            //
                            //                 {/*recent posts*/}
                            //                 <div className="post-box" height="300">
                            //                     <br styles="clear:both"/>
                            //
                            //
                            //                     <div className="form-group">
                            //                         <h6 className="author">Asked by {user.author}</h6>
                            //
                            //                         <h6 className="time">{user.createDate}</h6>
                            //                         <br styles="clear:both"/>
                            //                         <div className="recent-post-textbox">
                            //                             <h6 className="question">{user.content}</h6>
                            //                         </div>
                            //                         <div className="likes-dislikes">
                            //                             <div className="likes" id={""}>
                            //                                 <img src="thumbs-up-emoji-png-1.jpg" alt="thumbs-up" width="40"
                            //                                      height="40"/>
                            //                                 <br styles="clear:both"/>
                            //                                 2 Likes
                            //                             </div>
                            //                             <div className="dislikes">
                            //                                 <img src="Thumbs_Down_Sign_Emoji_Icon_ios10_large.png" alt="thumbs-down" width="30"
                            //                                      height="30"/>
                            //                                 <br styles="clear:both"/>
                            //                                 0 Dislikes
                            //                             </div>
                            //                             <div className="answers">
                            //                                 3 Answers
                            //                             </div>
                            //                             <div className="views">
                            //                                 7 Views
                            //                             </div>
                            //                         </div>
                            //
                            //
                            //                     </div>
                            //
                            //                     <div>
                            //                         {this.renderRedirect()}
                            //                         <div className="reply-button">
                            //                             <button className="btn btn-dark btn-group-sm btn-block" onClick={()=> this.setState({redirect: true})}>Replies</button>
                            //                         </div>
                            //                         <div className="share-button">
                            //                             <button className="btn btn-dark btn-group-sm btn-block">Share</button>
                            //                         </div>
                            //                     </div>
                            //
                            //                 </div>
                            //
                            //             </div>
                            //         </div>
                            //     </div>
                            //
                            //
                            // </Card>



                    ))}

                {/*</CardColumns>}*/}
                </div>
            </div>
        );
    }

}
const User = ({content}) => {
    const onChildButtonClick = (val) =>{
        console.log(val);
    }
    return(
        <div>

            <div>
                <p onClick={()=> console.log("boo")}>{content}</p>

            </div>
        </div>);
}

