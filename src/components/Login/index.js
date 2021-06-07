import React, {useContext} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import "./index.css"
import firebase from "firebase";

const Login = () => {
    const auth = firebase.auth()
    const loginGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }
    const loginFacebook = async () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card className="cardLogin">
                <Button onClick={loginGoogle} className="buttonLogin" variant="primary">Google Login</Button>
                <Button onClick={loginFacebook} variant="primary">Facebook Login</Button>
            </Card>
        </Container>
    );
};

export default Login;