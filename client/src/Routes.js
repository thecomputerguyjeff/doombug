import {Route, Switch} from "react-router-dom";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUp";

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={() => <Login setUser={props.setUser}
                                                          setToggleLogInSignUp={props.setToggleLogInSignUp}/>}/>
            <Route path="/sign-in" component={() => <Login setUser={props.setUser}
                                                           setToggleLogInSignUp={props.setToggleLogInSignUp}/>}/>
            <Route path="/sign-up" component={() => <SignUp setUser={props.setUser}
                                                            setToggleLogInSignUp={props.setToggleLogInSignUp}/>}/>
        </Switch>
    )
}