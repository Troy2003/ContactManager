import React,{useContext} from "react";
import {removeContaxt} from '../App'

function Card(propes) {

    const {id ,name , email , contact} = propes;

    const removeContact = useContext(removeContaxt);
   
   
    return (
    <>
      <div key={id} className="w-[80%] mx-auto h-20 flex justify-between rounded-md my-2 bg-gray-200">
        <i className="fas fa-2x fa-2xl fa-user w-[10%] h-full flex justify-center lg:justify-start items-center text-gray-800"></i>
        <div className="w-[65%] text-gray-800 font-bold flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:text-xl">
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{`+91 ${contact}`}</h1>
        </div>
        <div className="w-[25%] h-full flex items-center justify-evenly">
          <i className="fas fa-2x fa-2xl fa-edit text-green-800 cursor-pointer hover:mb-1"></i>
          <i className="fas fa-2x fa-2xl fa-trash-alt text-red-600 cursor-pointer hover:mb-1" value={id} onClick={(e)=>{removeContact(id)}}></i>
        </div>
      </div>
    </>
  );
}

export default Card;
