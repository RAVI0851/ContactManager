import React, { useEffect, useState } from 'react'
import {v4} from 'uuid'

const AddContact = ({setContact,Contact}) => {

  const [Name,setName] = useState('')
  const [email,setEmail] = useState('')

  let handleAddContact = (e)=>{
    e.preventDefault();
    if(Name==='' || email===''){
      alert("All fields are mandatory")
      return
    }
    const newData = {
      id: v4(),
      Name,
      email
    }
 setContact((prevdata)=>{
  let updatedData= [...prevdata,newData]
    localStorage.setItem("Contact",JSON.stringify(updatedData))
    setName('')
    setEmail('')
    return updatedData;
 })
  }
 useEffect(()=>{
    console.log("Contact updated");
    let localstorageContact =  localStorage.getItem("Contact")
  if(localstorageContact && localstorageContact!==undefined) {
      setContact(JSON.parse(localstorageContact))
    }
    
 },[])

  return (
    <div className='m-3'>
        <div>
            <form action="" className='flex items-center justify-center flex-col gap-3 '>
                <input className='w-1/2 border p-2 rounded-b-sm' type="text" name='name'  placeholder='Enter your name' value={Name} onChange={(e)=>setName(e.target.value)} />
                <input className='w-1/2 border p-2 rounded-b-sm ' type="text" name='email' placeholder='Enter your email id' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                <button className='bg-blue-400 rounded-xl w-[4rem] h-[2rem]' onClick={handleAddContact} >Add</button>
            </form>
        </div>
    </div>
  )
}

export default AddContact;