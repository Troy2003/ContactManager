import React from "react";
import Card from "./Card";

function ContactList(propes) {
  const { contactListArray} = propes;

  return (
    <>
      {contactListArray.map((contact) => {
        return (
        <Card id={contact.id} name={contact.name} email={contact.email} contact={contact.contact} />
        );
      })}
    </>
  );
}

export default ContactList;
