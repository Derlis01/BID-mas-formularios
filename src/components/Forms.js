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
      
      <p>{inputs.firstName.length < 2 ? 'Debe tener mas de dos caracteres' : ''}</p>

      <div className="inputCard">
        <label htmlFor="lastName">Last Name</label>
        <input onChange={onChange} type="text" name="lastName" />
      </div>

      <p>{inputs.lastName.length < 2 ? 'Debe contener mas de 5 caracteres' : ''}</p>

      <div className="inputCard">
        <label htmlFor="email">Email</label>
        <input onChange={onChange} type="email" name="email" />
      </div>

      <p>{inputs.email.length < 5 ? 'El correo debe contener al menos 5 caracteres' : ''}</p>

      <div className="inputCard">
        <label htmlFor="password">Password</label>
        <input onChange={onChange} type="password" name="password" />
      </div>

      <p>{inputs.password.length < 8 ? 'La contraseña debe contener al menos 8 caracteres' : ''}</p>

      <div className="inputCard">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input onChange={onChange} type="password" name="confirmPassword" />
      </div>


      <p>{inputs.password === inputs.confirmPassword ? '' : 'Deben concidir las contraseñas'}</p>
    </form>
  );
};

export default Forms;
