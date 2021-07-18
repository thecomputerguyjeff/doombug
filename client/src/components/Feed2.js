import {Component} from "react";
import Post from "./Post";
import {get} from "../helper/Fetch";
export default class Feed extends Component{


    constructor(props) {
        super(props);


    }



    useEffect(){
        get("api/v1/getAllPosts"
        ).then(res => {
            if (res.status === 200)
                return res.json();
            console.log(this.props.user);
            throw 'not 200'

        })
            .then((response) => {

                this.props.setPosts(response);



                this.props.setRetPosts(response.map((_item, _index) => { // Note: represent function body, normal javascript function
                    return(

                        <Post

                        key={_index}
                        title={_item.title}
                        content={_item.content}
                        createDate = {_item.createDate}
                        username = {_item.author}
                    />
                    );
                }));




            })
            .catch(err => {
                console.log(err)

            });



    }


   render(){
       return(<div>  {this.props.retPosts}</div>);
}
}