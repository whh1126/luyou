import React, { Component } from 'react';
import axios from "axios"
import Routerviews from "../routers/routerviews";
import "../components/style.css"
import { NavLink } from "react-router-dom"
export default class Discover extends Component {
    state = {
        discover: []

    }
    render() {
        const { child } = this.props;
        const { discover } = this.state
        return (
            <div className="wrap">
                <div className="watch">
                    <span>
                        <NavLink to="/discover/attention">关注</NavLink>
                    </span>
                    <span> <NavLink to="/discover/find">发现</NavLink></span>
                </div>
                <section>
                    {
                        discover && discover.map((item, index) => (
                            <div>
                                <img src={item.img} alt={item.title} />
                                <p key={index}>{item.title}</p>
                            </div>
                        ))
                    }
                </section>
                <Routerviews routers={child}></Routerviews>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/discover').then(({ data }) => {
            this.setState({
                discover: data.discover
            })

        })

    }
}
