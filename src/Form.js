import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.title)
        this.props.handleOnSubmit(this.state)
        this.setState({
            title: ''
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New todo:   </label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default Form