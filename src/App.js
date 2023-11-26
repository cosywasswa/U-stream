import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './components/home';
import Upload from './components/upload';
import Navbar from './components/navbar';
import Splash from './components/Splash';
import { useUser} from './components/context';

function App() {
  const { setUser } = useUser();
  useEffect(()=>{
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const user = JSON.parse(storedUser);
      console.log(user.status.data.id);
      setUser(user);
    }
  }, [setUser]);
 
  return (
    <div className="App">
      <Navbar />

      <Routes>
      <Route path="/" element = {<Splash />} />
        <Route path="/home" element = {<Home />} />
        <Route path="/upload" element = {<Upload />} />
      </Routes>
      </div>
  );
}

export default App;
