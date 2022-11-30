import ClassComponent from'./ClassComponent'
import PropsExample from './PropsExample'
function App(){
  return(
    <section>
      <PropsExample name="singam" age="21" />
      <PropsExample name="gani" age="21" />
       <p>display the msg</p>
       <h1>web developer</h1>
       <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="react " width="40%"/>
       <ClassComponent/>
    </section>
         
  )
}
export default App