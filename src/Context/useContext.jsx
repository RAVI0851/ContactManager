import { createContext, useEffect, useState } from "react";

export const ContactContext = createContext()

export const ContactProvider = ({children})=>{
    const [Contact,setContact] = useState([])


    useEffect(()=>{
      console.log("Contact updated");
      let localstorageContact =  localStorage.getItem("Contact")
    if(localstorageContact && localstorageContact!==undefined) {
        setContact(JSON.parse(localstorageContact))
      }
      
   },[])

return (
    <ContactContext.Provider value={{Contact,setContact}}>
        {children}
    </ContactContext.Provider>
)

}