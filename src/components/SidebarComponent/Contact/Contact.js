import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    phone: "",
    email: "",
    linkedIn: "",
  });

  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="contact--container">
      <div className="form__group field centerContact">
        <input
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="+1-234-5678"
          className="form__field"
          type="number"
        />

        <input
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="example@example.com"
          className="form__field"
        />

        <input
          name="linkedIn"
          value={contact.linkedIn}
          onChange={handleChange}
          placeholder="Linkedin.com/abcd"
          className="form__field"
        />
      </div>
    </div>
  );
};

export default Contact;
