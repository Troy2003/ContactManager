import React, { useState } from "react";
import uniqid from "uniqid";

function AddContact(propes) {
  const { addContactHandler } = propes;

 const [name, setName] = useState("");
 const [email, setemail] = useState("");
 const [contact, setContact] = useState("");

  const handelClick = () => {
    const state = {
      id:uniqid(),name,email,contact
    }
    if(name=== "" || contact === "")
    {
      return;
    }
    addContactHandler(state);
    setName("");
    setemail("");
    setContact("");
  };


  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <div>
          <label
            className="block text-gray-800 text-xl font-bold font-serif"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="my-2 h-10 outline-none border border-gray-300 w-full text-gray-600 font-bold text-xl px-3 rounded-md"
            type="text"
            placeholder="ex@: Yash"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        <div>
          <label
            className="block text-gray-800 text-xl font-bold font-serif"
            htmlFor="name"
          >
            Email
          </label>
          <input
            className="my-2 h-10 outline-none border border-gray-300 w-full text-gray-600 font-bold text-xl px-3 rounded-md"
            type="text"
            placeholder="ex@: Yash@email.com"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
          />
        </div>
        <div>
          <label
            className="block text-gray-800 text-xl font-bold font-serif"
            htmlFor="name"
          >
            Contact
          </label>
          <input
            className="my-2 h-10 outline-none border border-gray-300 w-full text-gray-600 font-bold text-xl px-3 rounded-md"
            type="text"
            placeholder="ex@: 8900000098"
            value={contact}
            onChange={(e)=>{setContact(e.target.value)}}
          />
        </div>

        <div>
          <button
            className="h-12 my-4 w-32 bg-blue-500 text-white font-bold rounded-md hover:border
               hover:border-blue-500  hover:bg-white hover:text-blue-500 transition-all ease-in-out delay-150"
          onClick={handelClick}>
            Add Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default AddContact;
