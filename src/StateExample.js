import React from 'react'

class StateExample extends React.Component{
    state={
        /*name:"sesi",
         number:"6309642803" */
         employee:[
            {id:1,name:"emp1"},{id:2,name:"emp2"}
         ]
    }
    render(){
        return(
            <div>
                {
                    this.state.employee.map((emp)=>(
                        <div> <p>{emp.id}</p>
                            <p>{emp.name}</p>
                        </div>
                    ))
                }
                <p>{this.state.name} {this.state.number}</p>
                {/*<p>
                    {this.state.employee[0].id} &nbsp;
                     {this.state.employee[0].name}   
                </p>
                <p>
                    {this.state.employee[1].id} &nbsp;
                    {this.state.employee[1].name}
        </p> */}
            </div>
        )
    }
}
export default StateExample