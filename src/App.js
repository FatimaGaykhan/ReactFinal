import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Admin from './pages/Admin'
import About from './pages/About'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Users from './pages/Users'
import UserEdit from './pages/UserEdit'
import AddUser from './pages/AddUser'




function App() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    const getUsers=async()=>{
      const response=await axios.get(' http://localhost:3500/data')
      setUsers(response.data);
    }
    getUsers();

  },[])



  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home userList={users}/>} />
        {/* <Route path='/admin' element={<Users/>} /> */}
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/edituser/:id' element={<UserEdit/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
