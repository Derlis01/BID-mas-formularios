import React from "react";
import "./forms.css";

const Forms = (props) => {
  const { inputs, setInputs } = props;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="inputCard">
        <label htmlFor="firstName">First Name</label>
        <input onChange={onChange} type="text" name="firstName" />
      </div>
      <div className="inputCard">
        <label htmlFor="lastName">Last Name</label>
        <input onChange={onChange} type="text" name="lastName" />
      </div>
      <div className="inputCard">
        <label htmlFor="email">Email</label>
        <input onChange={onChange} type="email" name="email" />
      </div>
      <div className="inputCard">
        <label htmlFor="password">Password</label>
        <input onChange={onChange} type="password" name="password" />
      </div>
      <div className="inputCard">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input onChange={onChange} type="password" name="confirmPassword" />
      </div>
    </form>
  );
};

export default Forms;
