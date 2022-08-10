import React from 'react'
import NavBar from './components/Navbar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {originals,action} from './urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Actions' isSmall/>
    </div>
  )
}

export default App