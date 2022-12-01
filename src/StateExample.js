import React from 'react'

class StateExample extends React.Component{
    state={
        name:"sesi",
         number:"6309642803"
    }
    render(){
        return(
            <div>
                <p>{this.state.name} {this.state.number}</p>
            </div>
        )
    }
}
export default StateExample