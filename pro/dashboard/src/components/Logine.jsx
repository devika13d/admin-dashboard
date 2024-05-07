import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logine() {
    const [details, setDetails] = useState({
        username: "admin",
        password: "123",
    });
    const nav = useNavigate();

    const handleLogin = async () => {
        const { username, password } = details;

        if (!username || !password) {
            alert("Please fill in both username and password fields.");
        } else {
            alert("Logged in successfully");
            nav('/home');
            setDetails({
                username: "",
                password: ""
            });
        }
    };

    return (
        <div className='container'>
            <div className='border border-secondary p-5 mt-5'>
                <h2 className='text-center'>LOGIN NOW!</h2>
                <div className='row mt-3'>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="username" className='form-label'>Username:</label>
                        <input type="text" id="username" placeholder='Username' className='form-control' value={details.username} onChange={(e) => setDetails({ ...details, username: e.target.value })} />
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="password" className='form-label'>Password:</label>
                        <input type="password" id="password" placeholder='Password' className='form-control' value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='btn btn-secondary text-dark' onClick={handleLogin} style={{ background: "#9277ab49" }}>Login</button>
                </div>
                <p className='text-center mt-4 fw-bold'>Don't have an account? <Link to={'/'} className='text-decoration-none'>Sign up now</Link></p>
            </div>
        </div>
    );
}

export default Logine;
