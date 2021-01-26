import React, { Component } from 'react'
import { Item } from './Item'
import Form from './Form'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                // {id: 1, title: "test1"}, 
                // {id: 2, title: "test2"},
                // {id: 3, title: "test3"},
                // {id: 4, title: "test4"}
            ]
        }
    }

    // handleDelete = () => {
    //     console.log('I am in delete')
    // }
    handleDelete = (id) => {
        console.log(id)
        this.setState((prevState) => {
            const newState=prevState.list.filter(item => item.id !== id )
            return {
                list: newState
            }
        })
    }

    addNewTodo = (data) => {
        console.log(data)
        const newTodo = {
            id: this.state.list.length + 1,
            title: data.title
        }
        console.log(newTodo)
        this.setState(prevState => ({
            list: [...prevState.list, newTodo]
        }))
    }

    render() {
        // const {list} = this.state
        // const itemList = list.map((item, key) => {
        // return <div>{item.title}</div>
        const items = this.state.list.map(i => <Item key={i.id} id={i.id} title={i.title} handleOnDelete={this.handleDelete} />)
            return (
                <div>
                    <Form handleOnSubmit={this.addNewTodo} />
                    {items}
                </div>
        )
    }
}

export default List