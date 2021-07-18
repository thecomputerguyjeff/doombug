import React, {useEffect, useState} from 'react';
import {get} from "../helper/Fetch";
import {Button} from "reactstrap";
import Post from "./Post";

const Tryit = (props) =>{
    var buttonListElements = [], // Empty Array

        n = 5,
        i;
    let ar = [];

    const array = ar;
    const onChildButtonClick = (val) =>{
        console.log(ar[0]);
    }



        get("api/v1/getAllPosts"
        ).then(res => {
            if (res.status === 200)
                return res.json();

            throw 'not 200'

        })
            .then((response) => {


                ar = response;
                for(i = 0; i < response.length; i = i + 1) {
                    // For each element, push a React element into the array
                    let goo = array[i];

                    buttonListElements.push(
                        <li key={i}><button onClick={onChildButtonClick.bind(null, i)}>{ar[i]}</button></li>
                    );
                }





            })
            .catch(err => {
                console.log(err)

            });






    console.log(ar, "vooch");


    // for(i = 0; i < n; i = i + 1) {
    //     // For each element, push a React element into the array
    //     let goo = array[i];
    //
    //     buttonListElements.push(
    //         <li key={i}><Button onClick={onChildButtonClick.bind(null, i)}>{ar[i]}</Button></li>
    //     );
    // }




        // Then render the array using curly braces
        return (
            <div>
                <ul>
                    { buttonListElements.push(ar.map((_item, _index) => { // Note: represent function body, normal javascript function
                        return(

                            <Post

                                key={_index}
                                title={_item.title}
                                content={_item.content}
                                createDate = {_item.createDate}
                                username = {_item.author}
                            />
                        );
                    }))}

                    </ul>
            </div>
        )

}
export default Tryit