//import ClassComponent from'./ClassComponent'
//import PropsExample from './PropsExample'
//import JSX from './JSX'
//import Demo from './Demo'
//import Events from './Events'
// import StateExample from './StateExample'
//import FuncProps from './FuncProps'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
function App(){
  return(
    <section>
    
      <BrowserRouter>
      <Navbar/>
              <Routes>
                    <Route>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="*" element={<NotFound/>}/>
                      
                    </Route>
              </Routes>
      </BrowserRouter>
      {/*   <StateExample/>
      <JSX/>
      <Events/>
      <Demo price="1st price"/>
    
      <FuncProps carname="swift" year="387543287"/>
      <PropsExample name="singam" age="21" />
      <PropsExample name="gani" age="21" />
       <p>display the msg</p>
       <h1>web developer</h1>
       <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="react " width="40%"/>
       <ClassComponent/> */}
    </section>
         
  )
}
export default App