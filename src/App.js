import "./App.css"
import {BrowserRouter, NavLink} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Navbar} from "react-bootstrap";
import {LOGIN_ROUTE} from "./utils/constants";
import firebase from "firebase";
import {connect} from "react-redux";

function App() {
    const auth = firebase.auth()
    const [user] = useAuthState(auth)

    return (
        <BrowserRouter>
            <div>
                <Navbar className="bg-light justify-content-end">
                    {user ?
                        <Button onClick={() => auth.signOut()} className="buttonApp">Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button className="buttonApp">Login</Button>
                        </NavLink>
                    }
                </Navbar>
            </div>
            <AppRouter/>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => ({
    listVideos: state.listVideos,
});


export default connect(mapStateToProps)(App);
