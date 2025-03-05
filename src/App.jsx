import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ContactProvider } from './Context/useContext'

function App() {

  return (
    <ContactProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<AddContact/>}/>
    <Route path='/contactList'element={<ContactList/>}/>
    </Routes>
    </BrowserRouter>
    </ContactProvider>
  )
}

export default App
