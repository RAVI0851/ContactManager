import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  const [Contact,setContact] = useState([])


  useEffect(()=>{
    console.log("Contact updated");
    let localstorageContact =  localStorage.getItem("Contact")
  if(localstorageContact && localstorageContact!==undefined) {
      setContact(JSON.parse(localstorageContact))
    }
    
 },[])
 
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<AddContact setContact={setContact} Contact={Contact}/>}/>
    <Route path='/contactList'element={<ContactList Contact={Contact} setContact={setContact}/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
