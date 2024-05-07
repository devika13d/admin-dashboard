import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);

  const handleSave = () => {
    const { email, password, confirmPassword } = formData;
    const errorHandle = {};

    if (!email.trim()) {
      errorHandle.email = "Email is required";
    }

    if (!password || password.length < 8) {
      errorHandle.password = "Password must be at least 8 characters";
    }

    if (password !== confirmPassword) {
      errorHandle.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errorHandle).length > 0) {
      setErrors(errorHandle);
      setValid(true);
    } else {
      alert('Account created successfully');
      navigate('/log');
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6'>
          <div className='border rounded border-primary p-5'>
            <h3 className='text-center p-2'>SignUp Now!</h3>
            <input type="text" className='mb-3 form-control' value={formData.email} placeholder='Enter your Email' required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            {errors.email && <p className='text-danger fw-bolder'>{errors.email}</p>}
            <input type="password" className='mb-3 form-control' value={formData.password} placeholder='Enter your password' required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            {errors.password && <p className='text-danger fw-bolder'>{errors.password}</p>}
            <input type="password" className='mb-3 form-control' value={formData.confirmPassword} placeholder='Confirm your password' required
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
            {errors.confirmPassword && <p className='text-danger fw-bolder'>{errors.confirmPassword}</p>}
            <div className='d-flex justify-content-center'>
              <button className='btn' style={{ background: "#9277ab49" }} onClick={handleSave}>Register</button>

            </div>
            <div>
              <p className='text-center mt-4 fw-bold'> Already have an Account? Please <Link to={'/log'} className='text-decoration-none'><span> Log in</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
