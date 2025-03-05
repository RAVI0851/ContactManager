import React from "react";

const ContactCard = ({ Contact, setContact }) => {
  let handleDelete = (email) => {
    setContact((prevdata) =>{
  let filteredData= prevdata.filter((contact) => contact.email !== email)
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
            onClick={() => handleDelete(contact.email)}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
