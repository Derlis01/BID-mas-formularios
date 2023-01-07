import React, { useState } from "react";
import Forms from './components/Forms'

function App() {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  return (
    <>
      <Forms inputs={state} setInputs={setState} />
    </>
  );
}

export default App;
