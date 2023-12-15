import React, { useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({onFormSwitch}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const storeUser = (userData) =>{
localStorage.setItem('user', JSON.stringify(userData));
window.location.href = '/Home';

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
storeUser(response);     
  };
}catch(error){

}
  }
  return (
    <main className="flex-col w-full">
    <h1 className="text-center text-32 p-10 font-medium">LOG IN</h1>
    <form type="submit" className="flex flex-col justify-center items-center w-full" onSubmit={onLoginSubmit}>
      <div className="flex flex-row justify-center items-center gap-20">
          <label className="text-20" name="email">Email</label>
          <input type="text" className="border p-1 rounded-sm"  name="email-input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="flex flex-row justify-center items-center gap-10 pt-5">
          <label className="text-20" name="password">Password</label>
          <input type="password" className="border p-1 rounded-sm" name="password-input" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="pt-10">
            <button className="text-20 bg-green-500 px-2 flex rounded-sm text-white" type="submit">Login</button>
        </div>

    </form>
    <div className="flex justify-centre pt-4">
            <button type="submit" className="text-centre text-white text-20 mx-auto rounded-sm bg-blue-600 px-2" onClick={()=>onFormSwitch('Signup')}>Have no account? signup here</button>
        </div>
</main>
  )
}

export default Login;