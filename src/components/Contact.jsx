import React, { useState } from "react";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg4 from "../assets/svg4.svg";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // Popup state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Google Form action URL and input field entry IDs (replace with your values)
    const googleFormActionURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3Lm2dcWHxuTw9hDQpX1NvGk7Isj8BtinpPn0i1e5eb79LRA/formResponse";
    
    // Replace these values with the actual entry IDs for your Google Form
    const formEntries = {
      fullName: "entry.394761048",  // Replace with your 'Full Name' entry ID
      email: "entry.767735353",     // Replace with your 'Email' entry ID
      message: "entry.1872242654",   // Replace with your 'Message' entry ID
    };

    // Build form data to send to Google Form
    const formBody = new URLSearchParams();
    formBody.append(formEntries.fullName, formData.fullName);
    formBody.append(formEntries.email, formData.email);
    formBody.append(formEntries.message, formData.message);

    try {
      await fetch(googleFormActionURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Allow CORS
      });

      // Reset the form and show popup
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      // Show popup for 2 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(formData);
  };

  return (
    <div className="h-auto mb-14 mt-14" id="contact">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-center top-5 md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-3 text-lg font-medium text-center top-5 md:text-xl">
          We help companies and individuals build out their brand guidelines.
        </p>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="fixed flex items-center p-4 text-white bg-green-500 rounded-lg shadow-lg top-5 right-5">
          <span className="mr-2">✔</span> Message sent successfully!
        </div>
      )}

      <div className=" md:flex">
         <form
        onSubmit={handleSubmit}
        className="w-full p-4 mt-10 border shadow-md md:w-2/4 md:mx-auto md:items-center md:justify-center"
      >
        <div className="flex flex-col">
          <div>
             <div>
            <label
              htmlFor="fullName"
              className="block font-semibold text-md sm:text-xl"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="block w-3/4 p-4 mt-2 font-semibold rounded-lg shadow-md sm:text-lg"
              placeholder="Enter full name"
            />
          </div>

          <div className="mt-10">
            <label
              htmlFor="email"
              className="block font-semibold text-md sm:text-xl"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="block w-3/4 p-4 mt-2 font-semibold rounded-lg shadow-md sm:text-lg"
            />
          </div>

          <div className="flex flex-col justify-center mt-10">
            <label
              htmlFor="message"
              className="block font-semibold text-md sm:text-xl"
            >
              Message
            </label>
            <textarea
              type="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-3/4 p-4 mt-2 font-semibold rounded-lg shadow-md sm:text-lg"
              placeholder="Type message..."
            />
          </div>

          <button
            type="submit"
            className="items-center justify-center w-2/4 px-4 py-1 m-2 mx-auto mt-10 text-xl text-black transition-transform duration-200 border-2 border-black rounded-md cursor-pointer md:w-48 hover:bg-black hover:text-white hover:border-slate-900"
          >
            Send Message
          </button>
          </div>
          
        </div>
      </form>

       <div className="items-center w-5/6 p-6 mx-auto mt-6 bg-blue-100 rounded-lg shadow-md h-96 md:w-1/3 md:mt-10">
         <h4 className="text-lg font-semibold">Contact Details</h4>
          <p className="mt-4 font-medium">automateup.tech@gmail.com</p>
          <p className="mt-10 font-medium">Follow us on:</p>
          <div className="flex gap-3 mt-2 cursor-pointer">
            <img src={svg1} alt="" className="w-5 md:w-7 hover:scale-95" />
            <img src={svg2} alt="" className="w-5 md:w-7 hover:scale-95" />
              <img src={svg4} alt="" className="w-5 md:w-7 hover:scale-95" />
          </div>
          <p className="mt-10">
          <a href="https://cal.com/automateup.tech" target="_blank">
            <button className="w-full py-1 mt-5 text-lg text-black transition-transform duration-200 border-2 border-black rounded-md cursor-pointer hover:bg-black hover:text-white hover:border-slate-900 md:w-1/2">
                {" "}
                Schedule A Meet
            </button>
              </a>
          </p>
         </div>
      
      </div>

     
      
        
         
    </div>
  );
};

export default Contact;
