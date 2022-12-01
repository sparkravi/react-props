import React from 'react'
class Events extends React.Component{
    state={
        username:""
    }
    handleChange=()=>{
        alert()
    }
    render(){
        return(
    <input onChange={this.handleChange} placeholder="username"/>
        )
    }
}
export default Events