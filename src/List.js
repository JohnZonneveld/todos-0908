import React, { Component } from 'react'
import { Item } from './Item'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{id: 1, title: "test1"}, {id: 2, title: "test2"}]
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

    render() {
        const {list} = this.state
        const itemList = list.map((item, key) => {
            // return <div>{item.title}</div>
            return <Item id={item.id} key={key} title={item.title} handleOnDelete={this.handleDelete}/>
        })
        return (
            <div>
                {itemList}
            </div>
        )
    }
}

export default List