import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'

function App() {

  const [Contact,setContact] = useState([])
  

 
  return (
    <>
      <Header/>
      <AddContact setContact={setContact} Contact={Contact} />
      <ContactList Contact={Contact} setContact={setContact}/>
    </>
  )
}

export default App
