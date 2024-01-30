import React from 'react'
import './app.css'

import Navbar from './Components/NavBar'
import Main from './Components/Main'
import Category from './Components/Category'
import SectionFruits  from './Components/SectionFruits'
import New from './Components/news'
import  Footer from './Components/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Main/>
   <Category/> 
   <SectionFruits/> 
   <New/>
   <Footer/>
    </div>
  )
}

export default App