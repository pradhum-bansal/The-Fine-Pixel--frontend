import React from "react";
import about from "../assets/about.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="rightSide">
        <h1> For Bulk Order Contact us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Your Demand</label>
          <textarea
            rows="6"
            placeholder="Send us your demand......."
            name="message"
            required
          ></textarea>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
