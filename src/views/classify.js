import React, { Component } from 'react'
import Head from "../components/Head";
import axios from "axios";
import Footer from "../components/Footer"
export default class Classify extends Component {
    state = {
        leftList: []
    }
    render() {
        const { leftList } = this.state;
        return (
            <div className="wrap">
                <Head></Head>
                <section>
                    <div className="big">
                        <div className="left">
                            <ul>
                                {
                                    leftList && leftList.map((item, index) => (
                                        <li key={index}>
                                            {item.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="right">
                            {
                                leftList && leftList.map((item, index) => (
                                    item.children.map((item1, index) => (
                                        <div key={index}>
                                            <img src={item1.img} alt={item1.title} />
                                            <p>
                                                {item1.title}
                                            </p>
                                        </div>
                                    ))
                                ))
                            }
                        </div>
                    </div>
                </section>
               <Footer></Footer>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/list').then(({ data }) => {
            this.setState({
                leftList: data.leftList
            })
            console.log(data.leftList)
        })
    }
}
