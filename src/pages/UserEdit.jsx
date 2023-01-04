import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Link,useNavigate,useParams} from 'react-router-dom'

const UserEdit = () => {
    let navigate=useNavigate();
    const {id}=useParams();
    const [user,setUser]=useState({
        fname:"",
        lname:"",
        username:"",
        avatar:""
    })
    const{fname,lname,username,avatar}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        loadUser();
    },[])
    const onSubmit=async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3500/data/${id}`,user)
        navigate("/admin")
    }
    console.log(`http://localhost:3500/data/${id}`)
    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:3500/data/${id}`)
        setUser(result.data)
       
    }
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 mx-auto p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={e=>onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="fname" className='form-label'>Name</label>
                            <input type="text" className='form-control' placeholder='Enter Name...' name='fname'value={fname} onChange={(e)=>onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname" className='form-label'>Lastname</label>
                            <input type="text" className='form-control' placeholder='Enter Lastname...' name='lname'value={lname} onChange={(e)=>onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label  className='form-label'>Email</label>
                            <input type="email" className='form-control' placeholder='Enter Email...' name='username'value={username} onChange={(e)=>onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label  className='form-label'>Avatar</label>
                            <input type="file" className='form-control' placeholder='Enter Image...' name='avatar' onChange={(e)=>onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-success'>Submit</button>
                        <Link className='btn btn-danger ms-3' to="/admin">Cancel</Link>
                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default UserEdit