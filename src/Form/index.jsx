import { useState } from "react";
import "./style.css";
const Form = () => {
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue, "input");
  };
  const isValid = (values) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation
    const alphabetRegex = /^[a-zA-Z]+$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if (!values?.fname || !alphabetRegex.test(values.fname)) {
      newErrors.fname = "Please enter valid first name.";
    }
    if (!values?.lname || !alphabetRegex.test(values.lname)) {
      newErrors.lname = "Please enter valid last name.";
    }
    if (!values?.email || !emailRegex.test(values.email)) {
      newErrors.email = "Please enter valid email.";
    }
    if (!values?.password || !passwordRegex.test(values.password)) {
      newErrors.password = "Please enter valid password.";
    }
    if (!values?.confirm) {
      newErrors.confirm = "Please enter confirm password.";
    }
    if (values.password !== values.confirm) {
      newErrors.confirm = "password do not match";
    }

    setErrors(newErrors);
    console.log(" Object.keys(newErrors)", Object.keys(newErrors), newErrors);
    console.log(" newErrors", Object.keys(newErrors), newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // console.log(errors)
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isValidForm = isValid(inputValue);
    console.log("isValidForm", isValidForm);
    console.log("password", inputValue.password);
    console.log("confirm password", inputValue.confirm);

    if (isValidForm) {
      console.log(inputValue, "submit");
      alert("Form Submitted");
      setInputValue({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm: "",
      }); // Clear the form fields
    }
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="container p-10 shadow-lg font-mono">
          <h1 className="mb-6">Sign Up</h1>
          <div className="my-3">
            <input
              type="text"
              value={inputValue?.fname || ""}
              className={
                errors?.fname
                  ? "bg-white border-2 p-5 px-6 rounded-md w-96 border-rose-600"
                  : "bg-white border-2 border-slate-300 p-5 px-6 rounded-md w-96"
              }
              placeholder="Firstname*"
              name="fname"
              onChange={(e) => handleOnChange(e)}
            />
            {errors?.fname && (
              <div style={{ color: "red" }}>{errors?.fname}</div>
            )}
          </div>
          <div className="my-3">
            <input
              type="text"
              value={inputValue?.lname || ""}
              className={
                errors?.lname
                  ? "bg-white border-2 p-5 px-6 rounded-md w-96 border-rose-600"
                  : "bg-white border-2 border-slate-300 p-5 px-6 rounded-md w-96"
              }
              placeholder="Lastname*"
              name="lname"
              onChange={(e) => handleOnChange(e)}
            />
            {errors?.lname && (
              <div style={{ color: "red", borderColor: "red" }}>
                {errors?.lname}
              </div>
            )}
          </div>
          <div className="my-3">
            <input
              type="email"
              value={inputValue?.email || ""}
              className={
                errors?.email
                  ? "bg-white border-2 p-5 px-6 rounded-md w-96 border-rose-600"
                  : "bg-white border-2 border-slate-300 p-5 px-6 rounded-md w-96"
              }
              placeholder="Email*"
              name="email"
              onChange={(e) => handleOnChange(e)}
            />
            {errors?.email && (
              <div style={{ color: "red" }}>{errors?.email}</div>
            )}
          </div>
          <div className="my-3">
            <input
              type="password"
              value={inputValue?.password || ""}
              className={
                errors?.password
                  ? "bg-white border-2 p-5 px-6 rounded-md w-96 border-rose-600"
                  : "bg-white border-2 border-slate-300 p-5 px-6 rounded-md w-96"
              }
              placeholder="Password*"
              name="password"
              onChange={(e) => handleOnChange(e)}
            />
            {errors?.password && (
              <div style={{ color: "red" }}>{errors?.password}</div>
            )}
          </div>
          <div className="my-3">
            <input
              type="password"
              value={inputValue?.confirm || ""}
              className={
                errors?.confirm
                  ? "bg-white border-2 p-5 px-6 rounded-md w-96 border-rose-600"
                  : "bg-white border-2 border-slate-300 p-5 px-6 rounded-md w-96"
              }
              placeholder="Confirm Password*"
              name="confirm"
              onChange={(e) => handleOnChange(e)}
            />
            {errors?.confirm && (
              <div style={{ color: "red" }}>{errors?.confirm}</div>
            )}
          </div>
          <div>
            <button
              className="uppercase bg-blue-900 text-white w-96 my-5"
              type="submit"
            >
              Sign up
            </button>
          </div>
          <div>
            <a href="#">Already have an account? Sign in</a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
