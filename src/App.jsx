import { useState } from 'react';
import './App.css'

export default function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) =>{
    setValues({...values, firstName: event.target.value})
  } 

  const handleLastNameInputChange = (event) =>{
    setValues({...values, lastName: event.target.value})
  }
  
  const handleEmailInputChange = (event) =>{
    setValues({...values, email: event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email)
      setValid(true)
      
    setSubmitted(true);
  }

  return (
    <div className='form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        { submitted && valid ? 
          <div className='success-message'>
              Registered Successfully
          </div>
          :
          null
        }
        <input 
          value={values.firstName}
          onChange ={handleFirstNameInputChange}
          id='first-name' 
          className='form-field' 
          type="text" 
          placeholder='First Name'
          name ='firstName'
        />
        {submitted && !values.firstName ? <span>First name is required</span> : null}
        <input 
          value={values.lastName}
          onChange ={handleLastNameInputChange}
          id='last-name' 
          className='form-field' 
          type="text" 
          placeholder='Last Name'
          name ='lastName'
        />
        {submitted && !values.lastName ? <span>Last name is required</span> : null}
        <input 
          value={values.email}
          onChange ={handleEmailInputChange}
          id='email' 
          className='form-field' 
          type='text'
          placeholder='email'
          name ='email'
        />
        {submitted && !values.email ? <span>Email is required</span> : null}
        <button className='form-field' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
