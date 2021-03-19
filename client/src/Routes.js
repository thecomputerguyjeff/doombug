import {Route, Switch} from "react-router-dom";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUp";
import EditAccount from "./components/EditAccount";

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={() => <Login setUser={props.setUser}/>} />
            <Route path="/sign-in" component={() => <Login setUser={props.setUser}/>} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/edit-account" component={() => <EditAccount setUser={props.setUser} user={props.user}/>} />
        </Switch>
    )
}