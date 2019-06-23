import React, { Component } from 'react'

export default class Head extends Component {
    static defaultProps = {
        title: "水杯",
        back: "false"
    }
    state = {
        val: "搜索",
        name:""

    }
    render() {
        const { back, title } = this.state;
        return (
            <div className="header">
                {
                    back ? <input type="text" onChange={this.handleChange.bind(this)} value={this.state.val} className="inp" /> : <input type="text" onChange={this.handleChange.bind(this)} value={this.state.name} className="inp" />
                }

            </div>
        )
    }
    handleChange(e) {
        this.setState({
            val: e.target.value
        })
    }
}
