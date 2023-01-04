import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useState,useEffect} from 'react'


const AddUser = () => {
    const[id,idchange]=useState("");
    const[fname,fnamechange]=useState("");
    const[lname,lnamechange]=useState("");
    const[username,usernamechange]=useState("");
    const[validation,valchange]=useState(false)

    const navigate = useNavigate();





    const handlesubmit=(e)=>{
        e.preventDefault();
        const userdata={fname,lname,username};


        fetch("http://localhost:3500/data",{
            method:"Post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userdata)
        }).then((res)=>{
            alert('Saved Succesfully.')
            navigate('/admin')

        }).catch((err)=>{
            console.log(err.message)
        })


    }
    


  return (
    <div className='mt-5'>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>
                <div className='card'>
                    <div className='card-title'>
                        <h2 className='text-center mt-3'>Add User</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input value={id} className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input required value={fname} onMouseDown={e=>valchange(true)} onChange={e=>fnamechange(e.target.value)} className='form-control' type="text" />
                                    {fname.length==0 && validation && <span className='text-danger'>Enter the name</span>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Lastname</label>
                                    <input value={lname} onChange={e=>lnamechange(e.target.value)} className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={username} onChange={e=>usernamechange(e.target.value)} className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className='btn btn-success mt-3' type='submit'>Save</button>
                                    <Link to="/admin" className='btn btn-danger mt-3'>Cancel</Link>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </form>
            </div>
            
        </div>
    </div>
  )
}

export default AddUser