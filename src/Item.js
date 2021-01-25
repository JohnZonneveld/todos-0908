import React from 'react'
import { TomatoButton } from './Styles'

// export const Item = (props) => {
export const Item = ({id, title, handleOnDelete}) => {
    const onDelete = () => {
        handleOnDelete(id)
    }

    return (
        <div>
            {/* <TomatoButton onClick={() => console.log("I have been clicked")}>X</TomatoButton> */}
            {/* <TomatoButton onClick={handleOnDelete}>X</TomatoButton> */}
            <TomatoButton onClick={onDelete}>X</TomatoButton>
            {/* <button onClick={this.handleOnClick}></button> */}
           {/* {props.title}  */}
           {title}
        </div>
    )
}
