import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import Routerviews from "../routers/routerviews";
import Footer from "../components/Footer"
export default class Find extends Component {
    render() {
        const { child } = this.props;
        return (
            <div>
                <NavLink to="/discover/find">发现</NavLink>
                <Routerviews routers={child}></Routerviews>
                <Footer></Footer>
            </div>
        )
    }
}
