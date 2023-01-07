import React, { useState } from "react";
import Forms from './components/Forms'
import Results from './components/Results'

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
      <Results data={state}/>
    </>
  );
}

export default App;
