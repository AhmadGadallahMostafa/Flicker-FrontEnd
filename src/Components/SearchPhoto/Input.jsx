import React from 'react'
import TextField from "@material-ui/core/TextField"
import "./style.scss"
const Input = (props) => {
    return (
        <form 
        onSubmit={props.submit}
        className="search-form">
        <TextField 
        onChange={props.change}
            fullWidth 
            label="Search Images on flickr"
        />
        </form>
    )
}

export default Input
