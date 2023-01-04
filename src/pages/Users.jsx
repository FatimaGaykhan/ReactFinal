import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Users = () => {
    const [userdata,userdatachange]=useState(null)
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getUser();
    },[])

    useEffect(()=>{
        fetch("http://localhost:3500/data").then((res)=>{
            return res.json();
        }).then((resp)=>{
            userdatachange(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
        
    },[])
    const getUser=async()=>{
        const response=await axios.get('http://localhost:3500/data');
        setUsers(response.data)
    }


  return (
    <div className='container'>
        <div className='card'>
            <div className="card-title">
                <h2 className='text-center mt-3'>Users List</h2>
            </div>
            <div className="card-body">
                <div >
                    <Link to='/adduser' className='btn btn-success mb-4'>Add User</Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-light text-dark'>
                        <tr>
                            <td>ID</td>
                            <td>Avatar</td>
                            <td>Name</td>
                            <td>Lastname</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>

                    </thead>
                    <tbody>
                        {   userdata &&
                            userdata.map(user=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td><img className='img' src={user.avatar} alt="" /></td>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.username}</td>
                                    <td><Link to={`/edituser/${user.id}`} className='btn btn-success'>Edit</Link><button onClick={async()=>{
                                        await axios.delete(`http://localhost:3500/data/${user.id}`)
                                        getUser();
                                    }} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </div>

    </div>
  )
}

export default Users