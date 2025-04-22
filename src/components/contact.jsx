/* eslint-disable no-unused-vars */

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4icfaac',      
      'template_a3lqulf',     
      form.current,
      '3IJfpOD0eHNgGiZqJ'      
    )
    .then((result) => {
      alert('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      alert('Failed to send the message, please try again.');
      console.log(error.text);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 flex justify-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-black mb-4">Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="user_name"
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email"
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="4" 
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 w-full py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-lg">
            <h2 className="text-3xl font-semibold text-black mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-black flex items-center gap-3">
                  <MdOutlineMailOutline className="text-blue-600" size={30} /> Email
                </h3>
                <p className="text-gray-600 text-lg px-11">support@shophub.com</p>
              </div>
              <div>
                <h3 className="font-medium text-black flex items-center gap-4">
                  <FiPhone className="text-blue-600" size={30} /> Phone
                </h3>
                <p className="text-gray-600 text-lg px-12">(555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-medium text-black flex items-center gap-4">
                  <LuMapPin className="text-blue-600" size={30} /> Address
                </h3>
                <p className="text-gray-600 text-lg px-12">
                  123 Shop Street<br />City, Country
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg">
            <h2 className="text-3xl font-semibold text-black mb-4">Business Hours</h2>
            <ul className="space-y-2 text-black">
              <li><span className='font-semibold'>Monday - Friday:</span> 9:00 AM - 6:00 PM</li>
              <li><span className='font-semibold'>Saturday:</span> 10:00 AM - 4:00 PM</li>
              <li><span className='font-semibold'>Sunday:</span> Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
