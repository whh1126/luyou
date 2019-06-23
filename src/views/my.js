import React, { Component } from 'react'
import Head from "../components/Head"
import Footer from "../components/Footer"
export default class My extends Component {
    render() {
        return (
            <div className="wrap">
                <Head ></Head>
                <h3>我的</h3>
                <section>
                    <div>
                        my
                    </div>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}
