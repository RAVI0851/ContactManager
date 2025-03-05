import React, { useContext } from "react";
import { ContactContext } from "../Context/useContext";

const ContactCard = () => {

  const {Contact,setContact} = useContext(ContactContext)

  let handleDelete = (id) => {
    setContact((prevdata) =>{
  let filteredData= prevdata.filter((contact) => contact.id !== id)
  localStorage.setItem("Contact",JSON.stringify(filteredData))
    return filteredData;}
    );
  };

  return (
    <div className="mt-[5rem]">
      {Contact.map((contact) => (
        <div className="flex justify-center items-center shadow-md m-[2rem] bg-gray-200 ">
          <i className="fa-solid fa-circle-user p-4 "></i>
          <div className="w-1/2">
            <h2 className="text-2xl">{contact.Name}</h2>
            <h3>{contact.email}</h3>
          </div>
          <i
            className="fa-solid fa-trash-can hover:cursor-pointer"
            onClick={() => handleDelete(contact.id)}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
