import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/shop">购物车</NavLink>
                <NavLink to="/my">我的</NavLink>
                <NavLink to="/classfiy">分类</NavLink>
                <NavLink to="/discover">发现</NavLink>
            </div>
        )
    }
}
