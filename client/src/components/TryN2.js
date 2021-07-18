import {Component} from "react";
import {get} from "../helper/Fetch";

export default class TryN2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };

        this._isMounted = false;
        this.getRandomUsers = this.getRandomUsers.bind(this);
        this.functe = this.getRandomUsers();
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
            this._isMounted && this.state.users.map(e =>
                <tr><td>{e.content}</td><td>{e.subject}</td></tr>
            )
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

