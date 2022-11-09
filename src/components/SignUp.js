import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./SignUp.css";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const SignUp = () => {
  const navigate = useNavigate();

  const userForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  // 2. Create a function for form submission
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Success");
      toast.success("Registered Successfully!");
      navigate("/login");
    } else {
      console.log("Something went wrong");
      toast.error("Something went wrong ❌");
    }
  };

  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  return (
    
    <div className="background-radial-gradient overflow-hidden">
    
      <div>
        <Toaster position="bottom-right" reverseOrder={true} />
      </div>

      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-5 fw-bold ls-tight">
              Welcome <br />
              <span>to the SignUp Page</span>
            </h1>
            <p className="mb-4 opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <Formik
                  initialValues={userForm}
                  onSubmit={userSubmit}
                  validationSchema={SignupSchema}
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstname"
                              className="form-control"
                              onChange={handleChange}
                              value={values.firstname}
                              helperText={
                                touched.firstname ? errors.firstname : ""
                              }
                              error={Boolean(
                                errors.firstname && touched.firstname
                              )}
                            />
                            <label className="form-label" for="form3Example1">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastname"
                              className="form-control"
                              onChange={handleChange}
                              value={values.lastname}
                              helperText={
                                touched.lastname ? errors.lastname : ""
                              }
                              error={Boolean(
                                errors.lastname && touched.lastname
                              )}
                            />
                            <label className="form-label" for="form3Example2">
                              Last Name
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          onChange={handleChange}
                          value={values.email}
                          helperText={touched.email ? errors.email : ""}
                          error={Boolean(errors.email && touched.email)}
                        />
                        <label className="form-label" for="form3Example3">
                          Email address
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          onChange={handleChange}
                          value={values.password}
                          helperText={touched.password ? errors.password : ""}
                          error={Boolean(errors.password && touched.password)}
                        />
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      {/* <!-- Checkbox --> */}
                      

                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>

                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
