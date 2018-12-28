import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import InventoryScreen from "./screen/InventoryScreen";

const config = [
    {
        path: "/",
        exact: true,
        component: HomeScreen
    },
    {
        path: "/inventory",
        exact: true,
        component: InventoryScreen
    },

    {
        path: "/login",
        exact: false,
        component: LoginScreen

    }
];

export {config};

export default class AppRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {config.map((route, i) => (<Route key={i} {...route}/>))}
                </div>
            </BrowserRouter>
        );
    }
}
