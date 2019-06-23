import React, { Component } from 'react'
import Head from "../components/Head"
import Footer from "../components/Footer"
export default class Shop extends Component {
    render() {
        const {title,back}=this.props;
        return (
            <div className="wrap">
                 <Head ></Head>
                    <h3>购物车</h3>
                <section>
                    <div>
                        goshopping
                    </div>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}
