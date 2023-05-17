import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_548dg8r",
        "template_p5bmoxp",
        form.current,
        "iK_m05WEBZQ1UKJIN"
      )
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMailOpen className="contact__option-icon" />
            <h4>Email</h4>
            <h5>maha@gmail.com</h5>
            <a
              href="mailto:maha@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>maha@gmail.com</h5>
            <a
              href="https://m.me/maha.abedulnabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message{" "}
            </a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message{" "}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;