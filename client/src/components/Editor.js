import React, {useEffect, useRef, useState} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import {Button} from "reactstrap";
import {post} from "../helper/Fetch";

export const EditorComp = (props) => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            //setCont( (editorRef.current.getContent()));
            console.log((editorRef.current.getContent()));
            //console.log(content);
            return (editorRef.current.getContent());



        }
        else{

        }

    }


    const handleSubmit = (e) => {
        //e.preventDefault();
        //setCont(log());
handleSubmit2();

    }
    const handleSubmit2 = (log) =>{

        console.log("hey");

        console.log(props.content);
        if (props.content === "") {

        } else {
            post("api/v1/saveNewPost", {

                    content: props.content,

                }
            )
                .then((response) => {

                    console.log(response);



                })
                .catch(err => {
                    console.log(err);
                });
        }
    }




    return (

        <>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}

                apiKey='3x9uzjmfh2vo8t13a7x4gk6kupe5gca5jet9g22ilhygaf5k' init={{ /* your other settings */}}

                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}

            />
            <Button size={"md"} className={"new-post-buttons"} onClick={()=>log()}>Post</Button>
            <Button size={"sm"} outline color="secondary" className={"new-post-buttons"}>cancel</Button>


        </>


    );
}
export default EditorComp;