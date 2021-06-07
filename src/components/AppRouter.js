import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {LOGIN_ROUTE, VIDEO_GROUP_ROUTE} from "../utils/constants";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";


const AppRouter = () => {
    const auth = firebase.auth()
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component})=>
                <Route key={path} path={path} component={Component} exact={true}/>)}
                <Redirect to={VIDEO_GROUP_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component})=>
                    <Route key={path} path={path} component={Component} exact={true}/>)}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
};

export default AppRouter;