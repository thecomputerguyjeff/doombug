// import React, {Component, useEffect, useState} from "react";
// import {post} from "../helper/Fetch";
// import {Redirect} from "react-router-dom";
// // import 'tinymce/tinymce';
// // import 'tinymce/icons/default';
// // import 'tinymce/themes/silver';
// // import 'tinymce/plugins/paste';
// // import 'tinymce/plugins/link';
// // import 'tinymce/plugins/image';
// // import 'tinymce/plugins/table';
// // import 'tinymce/skins/ui/oxide/skin.min.css';
// // import 'tinymce/skins/ui/oxide/content.min.css';
// // import 'tinymce/skins/content/default/content.min.css';
// import { Editor } from '@tinymce/tinymce-react';
// // commonjs require
// import { useRef } from 'react';
// import {Button} from "reactstrap";
// import EditorComp from "./Editor";
//
// const NewPost = (props) =>{
//
//     const editorRef = useRef(null);
//         const username = props.username;
//         const firstname = props.firstName;
//
//         let redirect = false;
//         let title = "";
//         let content = "";
//         let author = {
//             username, firstname
//     };
//         let replies = [];
//         let ups = [];
//         let downs = [];
//         let createDate = "";
//
//
//
//     const renderRedirect = () => {
//         if(props.redirect){
//             //props.setRedirect(false);
//             return <Redirect to='/feed' />
//
//         }
//
//     }
//     useEffect(() => {
//         if (props.redirect) {
//             props.setRedirect(false);
//         }
//     }, [props.redirect])
//     const log = () => {
//         if (editorRef.current) {
//
//                 content =  (editorRef.current.getContent())
//
//
//             console.log((editorRef.current.getContent()));
//
//             //return (editorRef.current.getContent());
//
//
//
//         }
//         else{
//
//         }
//
//     }
//
//
//     const handleSubmit = (e) => {
//         //e.preventDefault();
//
//         //content = contentEditor;
//
//         if (content === "") {
// console.log(content);
//         } else {
//             post("api/v1/saveNewPost", {
//                     title: title,
//                     content: content,
//                     author: author
//                 }
//             )
//                 .then((response) => {
//
//                     props.setRedirect(true);
//                     console.log("gotit");
//
//
//
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         }
//
//
//
//
//     }
//     // const [contentEditor, setContentEditor] = useState();
//     // const handleEditorChange = (content, editor) => {
//     //     console.log('Content was updated:', content);
//     //     setContentEditor(content);
//     // }
//     //
//     // var { Editor } = require('@tinymce/tinymce-react');
//
//
//         return (
//
//             <div className={"container"}>
//             <form>
//
//                 <h3>New Post</h3>
//                 <div className="form-group">
//                     <label>Title</label>
//                     <input type="text" className="form-control"
//                            id="title"
//                            placeholder="Enter Title of Post"
//                            onChange={(e) => this.handleFieldChange(e, 'title')}/>
//                 </div>
//                 <div className="form-group">
//                     <label>Content</label>
//                     <textarea type="textarea" maxLength="140"
//                               rows="7" className="form-control"
//                               id="content"
//                               placeholder="Enter Content of Post"
//                               onChange={(e) => this.handleFieldChange(e, 'content')}/>
//                 </div>
//                 {this.renderRedirect()}
//                 <button type="submit" onClick={this.handleSubmit}
//                         className="btn btn-dark btn-lg btn-block">Post
//                 </button>
//
//             </form>
//             </div>);
//             // <div className={"post-container"}>
//             //     <>
//                     {/*<Editor*/}
//                     {/*    onInit={(evt, editor) => editorRef.current = editor}*/}
//
//                     {/*    apiKey='3x9uzjmfh2vo8t13a7x4gk6kupe5gca5jet9g22ilhygaf5k' init={{ /* your other settings *!/}*/}
//
//                     {/*    initialValue="<p>This is the initial content of the editor.</p>"*/}
//                     {/*    init={{*/}
//                     {/*        height: 500,*/}
//                     {/*        menubar: false,*/}
//                     {/*        plugins: [*/}
//                     {/*            'advlist autolink lists link image charmap print preview anchor',*/}
//                     {/*            'searchreplace visualblocks code fullscreen',*/}
//                     {/*            'insertdatetime media table paste code help wordcount'*/}
//                     {/*        ],*/}
//                     {/*        toolbar: 'undo redo | formatselect | ' +*/}
//                     {/*            'bold italic backcolor | alignleft aligncenter ' +*/}
//                     {/*            'alignright alignjustify | bullist numlist outdent indent | ' +*/}
//                     {/*            'removeformat | help',*/}
//                     {/*        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'*/}
//                     {/*    }}*/}
//
//                     {/*/>*/}
//                     {/*<Editor*/}
//                     {/*    initialValue="<p>This is the initial content of the editor</p>"*/}
//                     {/*    apiKey='3x9uzjmfh2vo8t13a7x4gk6kupe5gca5jet9g22ilhygaf5k'*/}
//                     {/*    init={{*/}
//                     {/*        skin: false,*/}
//                     {/*        content_css: false,*/}
//                     {/*        height: 500,*/}
//                     {/*        menubar: false,*/}
//                     {/*        plugins: [*/}
//                     {/*            'link image',*/}
//                     {/*            'table paste'*/}
//                     {/*        ],*/}
//                     {/*        toolbar:*/}
//                     {/*            'undo redo | formatselect | bold italic backcolor | \*/}
//                     {/*            alignleft aligncenter alignright alignjustify | \*/}
//                     {/*            bullist numlist outdent indent | removeformat | help'*/}
//                     {/*    }}*/}
//                     {/*    value={contentEditor}*/}
//                     {/*    onEditorChange={handleEditorChange}*/}
//                     {/*/>*/}
//                     <Editor
//                         apiKey="3x9uzjmfh2vo8t13a7x4gk6kupe5gca5jet9g22ilhygaf5k"
//                         init={{ plugins: 'link table' }}
//                     />
//                     {renderRedirect()}
//             //         <Button size={"md"} className={"new-post-buttons"} onClick={()=>handleSubmit()}>Post</Button>
//             //         <Button size={"sm"} outline color="secondary" className={"new-post-buttons"}>cancel</Button>
//             //
//             //
//             //     </>
//             //
//             //
//             //
//             //
//             // </div>
//
//
//
//
//     }
//     export default NewPost
