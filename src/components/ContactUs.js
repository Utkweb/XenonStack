import { Formik } from "formik";
import React from "react";
import "./Contact.css";

const ContactUs = () => {
  const contactform = {
    name: "",
    email: "",
    message: "",
  };

  // 2. Create a function for form submission
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/contact/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });
  return (
    <div className="container cont1">
      <h2 className="text-center">Contact Us</h2>
      <Formik
        initialValues={contactform}
        onSubmit={userSubmit}
      >
        {({ values, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input type="text" id="name" className="form-control"
              onChange={handleChange}
              value={values.name}
               />
              <label className="form-label" for="form4Example1">
                Name
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="email" className="form-control"
              onChange={handleChange}
              value={values.email} />
              <label className="form-label" for="form4Example2">
                Email address
              </label>
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="message"
                rows="4"
                onChange={handleChange}
                              value={values.message}
              ></textarea>
              <label className="form-label" for="form4Example3">
                Message
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
    
  );
};
export default ContactUs;
