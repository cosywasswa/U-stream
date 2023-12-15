import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './components/home';
import Upload from './components/upload';
import Navbar from './components/navbar';
import Splash from './components/Splash';
import Account from './components/Account';
import { useUser} from './components/context';

function App() {
  const { setUser } = useUser();
  useEffect(()=>{
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const user = JSON.parse(storedUser);
      console.log(user);
      setUser(user);
    }
  }, [setUser]);
 
  return (
    <div className="App">
      <Routes>
      <Route path="/" element = {<Splash />} />
        <Route element = {<Navbar />}>
        <Route path="/home" element = {<Home />} />
        <Route path="/upload" element = {<Upload />} />
        <Route path="/account" element = {<Account />} />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
