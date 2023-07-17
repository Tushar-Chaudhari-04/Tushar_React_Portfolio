import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contactform">
      <form>
        <label>Name</label>
        <input type="text"/>

        <label>Email</label>
        <input type="email"/>

        <label>Subject</label>
        <input type="text"/>

        <label>Message</label>
        <textarea row={3} type="text"/>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
