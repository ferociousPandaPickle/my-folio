
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/home"
import Projects from "./pages/projects"
import Background from "./pages/background"
import Hobbies from "./pages/hobbies"
import Navbar from "./component/navbar"

import "./component/app.css"

function App() {

  return (
    <Router>
      <Navbar/>
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/background' element={<Background/>}/>
          {/* <Route path='/hobbies' element={<Hobbies/>}/> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
