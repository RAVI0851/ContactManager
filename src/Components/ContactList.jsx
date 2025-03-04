import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({Contact,setContact}) => {
  
  return (
    <div>
      <ContactCard setContact={setContact} Contact={Contact}/>
    </div>
  )
}

export default ContactList