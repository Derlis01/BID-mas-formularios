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
      
      {inputs.firstName.length === 0 ? '' : message(inputs,1)}

      <div className="inputCard">
        <label htmlFor="lastName">Last Name</label>
        <input onChange={onChange} type="text" name="lastName" />
      </div>

      {inputs.lastName.length === 0 ? '' : message(inputs,2)}

      <div className="inputCard">
        <label htmlFor="email">Email</label>
        <input onChange={onChange} type="email" name="email" />
      </div>

      {inputs.email.length === 0 ? '' : message(inputs,3)}

      <div className="inputCard">
        <label htmlFor="password">Password</label>
        <input onChange={onChange} type="password" name="password" />
      </div>

      {inputs.password.length === 0 ? '' : message(inputs,4)}

      <div className="inputCard">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input onChange={onChange} type="password" name="confirmPassword" />
      </div>


      {inputs.confirmPassword.length === 0 ? '' : message(inputs,5)}
    </form>
  );
};

export default Forms;

const message = (dat,num) => {
  if (num === 1) {
    return <p>{dat.firstName.length < 2 ? 'Debe tener mas de dos caracteres' : ''}</p>
  }
  else if (num ===2) {
    return <p>{dat.lastName.length < 2 ? 'Debe tener mas de dos caracteres' : ''}</p>
  }
  else if (num === 3) {
    return <p>{dat.email.length < 5 ? 'El correo debe contener al menos 5 caracteres' : ''}</p>
  }
  else if (num === 4) {
    return <p>{dat.password.length < 8 ? 'La contraseña debe contener al menos 8 caracteres' : ''}</p>
  }
  else if (num === 5) {
    return <p>{dat.confirmPassword === dat.password ? '' : 'Las contraseñas no coinciden'}</p>
  }
}