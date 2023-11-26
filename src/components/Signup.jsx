import React, { useState} from 'react';
import axios from 'axios';

const Signup = ({onFormSwitch, onSignupSuccess}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = async(e) => { 
        e.preventDefault();
            try{
                if(name, email, password){
    const response = await axios.post('http://127.0.0.1:4000/users', {
        'user': {
    'name': name, 
    'email': email, 
    'password': password
        }
})
console.log(response.data)
    setName('');
    setEmail('');
    setPassword('');
    onSignupSuccess('Login')
}

            }catch(error){
                return e.rejectWithValue(error);
            }
      
    }
  return (
    <main>
        <h1>Create an account</h1>
        <form className="signup-form" onSubmit={handleSignup}>
            <label className="name-lablel" name="name">Full name</label>
            <input type="text" value={name} name="name-input" placeholder="name" onChange={(e) =>setName(e.target.value)} />
            <label className="email-lablel" name="email">Email</label>
            <input type="text" name="email-input" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)} />
            <label className="passwd-lablel" name="password">Password</label>
            <input type="password" name="password-input" placeholder="Enter password" value={password} onChange={(e) =>setPassword(e.target.value)} />
            <div className="signup-btn">
                <button className="submit-btn" type="submit">Sign up</button>
            </div>

        </form>
        <div className="switch-btn-div">
            <button type="submit" className="switch-btn" onClick={()=>onFormSwitch('Login')}>Have an account? Login here</button>
        </div>
    </main>
  )
}

export default Signup