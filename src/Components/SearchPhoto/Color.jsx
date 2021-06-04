import React from 'react'
import TextField from "@material-ui/core/TextField"
import "./style.scss"
const Color = (props) => {
    return (
        <form 
        className="search-form">
        <TextField 
        onChange={props.change}
            fullWidth 
            label="Colors:black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, and blue."
        />
        </form>
    )
}

export default Color
