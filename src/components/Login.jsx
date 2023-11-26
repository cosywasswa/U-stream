import React, { useState} from 'react'
import axios from 'axios';

const Login = ({onFormSwitch}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const storeUser = (userData) =>{
localStorage.setItem('user', JSON.stringify(userData));
  }
  const onLoginSubmit = async(e) =>{
    e.preventDefault();
    try{
      if( email, password){
const response = await axios.post('http://127.0.0.1:4000/users/sign_in', {
'user': { 
'email': email, 
'password': password
}
})
setEmail('');
setPassword('');
storeUser(response.headers.get('Authorization'));
      
  };
}catch(error){

}
  }
  return (
    <main>
    <h1>Log into your account</h1>
    <form type="submit" className="login-form" onSubmit={onLoginSubmit}>
        <label className="email-lablel" name="email">Email</label>
        <input type="text" name="email-input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label className="passwd-lablel" name="password">Password</label>
        <input type="password" name="password-input" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <div className="login-btn">
            <button className="submit-btn" type="submit">Login</button>
        </div>

    </form>
    <div className="switch-btn-div">
            <button type="submit" className="switch-btn" onClick={()=>onFormSwitch('Signup')}>Have no account? signup here</button>
        </div>
</main>
  )
}

export default Login;