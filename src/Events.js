import React from 'react'
class Events extends React.Component{
    state={
        username:"",
        mobile:""
    }
    handleClick=()=>{
        console.log(this.state.username)
        console.log(this.state.mobile)
            }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    {/*this.setState({
       [e.target.name]:e.target.value
    }) */}
}

    
    render(){
        return(
            <div>
                 <input name="username" onChange={this.handleChange} placeholder="username"/>
                 <input name="mobile" onChange={this.handleChange} placeholder="enter mobile"/>
                 <button onClick={this.handleClick}>submit</button>
            </div>
        )
    }
}

export default Events 