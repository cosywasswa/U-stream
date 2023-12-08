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
                console.log(error);
            }
      
    }
  return (
    <main className="flex-col w-full">
        <h1 className="text-center text-32 p-10">Create an account</h1>
        <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSignup}>
            <div className="flex flex-row justify-center items-center gap-10" >
               <label className="name-lablel" name="name">Full name</label>
                <input type="text" className="ml-3 border px-2" value={name} name="name-input" placeholder="name" onChange={(e) =>setName(e.target.value)} />
            </div>
            <div className="flex flex-row justify-center items-center gap-20 pt-5 pl-2">
                <label className="email-lablel" name="email">Email</label>
                <input type="text" className="border px-2" name="email-input" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)} />
            </div>
            <div className="flex flex-row justify-center items-center gap-10 pt-5">
                 <label className="passwd-lablel" name="password">Password</label>
                <input type="password" className="ml-5 px-2 border" name="password-input" placeholder="Enter password" value={password} onChange={(e) =>setPassword(e.target.value)} />
            </div>
            <div className="pl-2">
                <button className="text-20 px-2 my-5 bg-green-500 text-white rounded-sm" type="submit">Sign up</button>
            </div>

        </form>
        <div className="flex justify-center items-center">
            <button type="submit" className="bg-blue-600 text-white text-20 rounded-sm px-2" onClick={()=>onFormSwitch('Login')}>Have an account? Login here</button>
        </div>
    </main>
  )
}

export default Signup