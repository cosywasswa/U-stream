import React, { useState} from 'react'
import Login from './Login';
import Signup from './Signup';

const Splash = () => {
    const [currentForm, setCurrentForm] = useState('Login')
    const toggleForm = (formName) => {
       setCurrentForm(formName);
    }
  return (
<main className="bg-gray-100 h-screen">
{
    currentForm === 'Login'? <Login onFormSwitch={toggleForm} />:<Signup onFormSwitch={toggleForm} onSignupSuccess={toggleForm} />
}
</main>
  )
}

export default Splash