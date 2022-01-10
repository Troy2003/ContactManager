import React, { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const removeContaxt = React.createContext(null);

function App() {
  const LOCAL_STORAGE_KEY = "Contacts";

  const [contactListArray, setcontactListArray] = useState([]);

  const addContactHandler = (contact) => {
    setcontactListArray([...contactListArray, contact]);
  };

  const removeContactHandeler = (id) => {
    const newcontactList = contactListArray.filter((contact) => {
      return contact.id !== id;
    });
    setcontactListArray(newcontactList);
  };

  useEffect(() => {
    const fetch_con = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (setcontactListArray) setcontactListArray(fetch_con);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactListArray));
  }, [contactListArray]);

  return (
    <>
      <Header />

      <AddContact addContactHandler={addContactHandler} />

      <removeContaxt.Provider value={removeContactHandeler}>
        <ContactList contactListArray={contactListArray} />
      </removeContaxt.Provider>
    </>
  );
}

export default App;
export { removeContaxt };
