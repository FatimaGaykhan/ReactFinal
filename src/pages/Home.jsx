import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Users = () => {
    const [userdata,userdatachange]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:3500/data").then((res)=>{
            return res.json();
        }).then((resp)=>{
            userdatachange(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
        
    },[])


  return (
    <div className='container'>
        <div className='card'>
            <div className="card-title">
                <h2 className='text-center mt-3'>Users List</h2>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead className='bg-light text-dark'>
                        <tr>
                            <td>ID</td>
                            <td>Avatar</td>
                            <td>Name</td>
                            <td>Lastname</td>
                            <td>Email</td>
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