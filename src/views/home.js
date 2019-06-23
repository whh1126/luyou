import React, { Component } from 'react';
import Head from "../components/Head"
import Footer from "../components/Footer";
import axios from "axios"
export default class Home extends Component {
    state = {
        homeList: []
    }
    render() {
        const { homeList } = this.state;
        return (
            <div className="wrap">
                <Head></Head>
                <section>
                    {
                        homeList && homeList.map((item,index)=>(
                           <dl key={index}>
                               <dt>
                                   <img src={item.img} alt={item.title}/>
                               </dt>
                               <dd>
                                    <p>{item.title}</p>
                               </dd>
                           </dl>
                        ))
                    }
                   
                </section>
                <Footer></Footer>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/home').then(({ data }) => {
            this.setState(({
                homeList: data.homeList
            }))
            // console.log(data.homeList)
        })
    }
}
