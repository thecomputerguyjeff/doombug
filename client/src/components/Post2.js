import React, {Component} from "react";
import {post} from "../helper/Fetch";
import {Link, NavLink, Redirect} from "react-router-dom";
import {Alert, Badge, Button, Card, CardColumns, CardLink, CardText, CardTitle, Container, Media} from "reactstrap";
import Replies from "./Reply";
import '../App.css';
 class Post extends Component {
     constructor(props) {
         super(props);
         this.state = {
             redirect: false,

         };
         //this.renderRedirect = this.renderRedirect().bind(this);
     }



     renderRedirect=()=>{
         if (this.state.redirect){
             console.log(this.props.content);
             return <Redirect to={{
                 pathname: `/replies/${this.props.id}`,
                 state: { content: this.props.content,
                 username: this.props.username,
                 createDate: this.props.createDate}
             }}
             />
             return <Replies content={this.props.content}/>
         }

     }
     render() {
         return (
             <>
                 {this.renderRedirect()}
                 <Alert  className={"aler"}>
                     <Media>
                         <Media left href="#" className={"side"}>
                             <h5> <Badge className={"votes"}>4 <br/> votes</Badge></h5>
                             <Media className={"side"}>
                                 <h5> <Badge color="success" >{this.props.replies?this.props.replies.length:0} <br/> answers</Badge></h5>
                             </Media>
                         </Media>

                         <Media body>
                             <Media  heading onClick={()=>this.setState({redirect: true})}>
                               <Link style={{ textDecoration: 'none' }}>{this.props.title}</Link>
                             </Media>
                             {this.props.content}

                         </Media>


                     </Media>
                     <Media className={"flot"}>
                         {this.props.createDate}
                     </Media>
                 </Alert>
                 {/*<Alert  color="primary" className={"card"}>*/}
                 {/*    /!*<CardTitle tag="h5">{this.props.title}</CardTitle>*!/*/}
                 {/*    /!*<CardText>{this.props.content}</CardText>*!/*/}
                 {/*    /!*<Button color="secondary">view</Button>*!/*/}
                 {/*    /!*recent posts*!/*/}
                 {/*    <form>*/}
                 {/*        <div className="post-page">*/}

                 {/*            <div>*/}



                 {/*                /!*recent posts*!/*/}
                 {/*                <div className="post-box" height="300">*/}
                 {/*                    <br styles="clear:both"/>*/}


                 {/*                    <div className="form-group">*/}
                 {/*                        <h6 className="author">Asked by {this.props.username}</h6>*/}

                 {/*                        <h6 className="time">{this.props.createDate}</h6>*/}
                 {/*                        <br styles="clear:both"/>*/}
                 {/*                        <div className="recent-post-textbox">*/}
                 {/*                            <h6 className="question">{this.props.content}</h6>*/}
                 {/*                        </div>*/}
                 {/*                        <div className="likes-dislikes">*/}
                 {/*                            <div className="likes" id={""}>*/}
                 {/*                                <img src="thumbs-up-emoji-png-1.jpg" alt="thumbs-up" width="40"*/}
                 {/*                                     height="40"/>*/}
                 {/*                                <br styles="clear:both"/>*/}
                 {/*                                2 Likes*/}
                 {/*                            </div>*/}
                 {/*                            <div className="dislikes">*/}
                 {/*                                <img src="Thumbs_Down_Sign_Emoji_Icon_ios10_large.png" alt="thumbs-down" width="30"*/}
                 {/*                                     height="30"/>*/}
                 {/*                                <br styles="clear:both"/>*/}
                 {/*                                0 Dislikes*/}
                 {/*                            </div>*/}
                 {/*                            <div className="answers">*/}
                 {/*                                3 Answers*/}
                 {/*                            </div>*/}
                 {/*                            <div className="views">*/}
                 {/*                                7 Views*/}
                 {/*                            </div>*/}
                 {/*                        </div>*/}


                 {/*                    </div>*/}

                 {/*                    <div>*/}
                 {/*                        {this.renderRedirect()}*/}
                 {/*                        <div className="reply-button">*/}
                 {/*                            <button className="btn btn-dark btn-group-sm btn-block" onClick={()=> this.setState({redirect: true})}>Replies</button>*/}
                 {/*                        </div>*/}
                 {/*                        <div className="share-button">*/}
                 {/*                            <button className="btn btn-dark btn-group-sm btn-block">Share</button>*/}
                 {/*                        </div>*/}
                 {/*                    </div>*/}

                 {/*                </div>*/}

                 {/*            </div>*/}
                 {/*        </div>*/}
                 {/*    </form>*/}


                 {/*</Alert>*/}
             </>
         );

     }
 }





export default Post