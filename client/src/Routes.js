import {Route, Switch} from "react-router-dom";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUp";
import EditAccount from "./components/EditAccount";
import Feed from "./components/Feed";
import Post from "./components/NewPost";

export const Routes = (props) => {
    return (

        <Switch>

            <Route exact path='/' component={() => <Login setUser={props.setUser}
                                                          setToggleLogInSignUp={props.setToggleLogInSignUp}
                                                          toggleLogInSignUp={props.toggleLogInSignUp}
            />}/>

            <Route path="/sign-in" component={() => <Login setUser={props.setUser}
                                                           setToggleLogInSignUp={props.setToggleLogInSignUp}
                                                           toggleLogInSignUp={props.toggleLogInSignUp}
            />}/>

            <Route path="/sign-up" component={() => <SignUp setUser={props.setUser}
                                                            setToggleLogInSignUp={props.setToggleLogInSignUp}
                                                            toggleLogInSignUp={props.toggleLogInSignUp}
            />}/>

            <Route path="/edit-account" component={() => <EditAccount setUser={props.setUser} user={props.user}/>}/>

            <Route path="/feed" component={() => <Feed setUser={props.setUser} user={props.user} firstname = {props.firstname}/>} />

            <Route path="/newPost" component={() => <Post setUser={props.setUser} user={props.user} />} />

        </Switch>
    )
};