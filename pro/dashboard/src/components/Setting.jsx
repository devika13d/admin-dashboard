import React, { useState } from 'react';
import './settings.css';
import { useNavigate } from 'react-router-dom';

function Setting() {
    const [adminInfo, setAdminInfo] = useState({
        username: 'Admin',
        email: 'admin@example.com',
        oldpassword: '********',
        newpassword: ""
    });
    const navigate = useNavigate()
    const handleSubmit = () => {
        const { username, email,oldpassword, newpassword } = adminInfo;
        if (!username && !email && !oldpassword && !newpassword) {
            alert("fill the form completely")
        } else {
            alert('updated successfully');
            navigate('/over')
        }
    };


    return (
        <div className="admin-profile-container d-flex align-items-center justify-content-center p-5">
            <div className="admin-profile-form-container">
       
                <div className="profile-picture">
                    <img src="https://th.bing.com/th/id/R.9f909e47ddfdd7ab255971b2575dcfb8?rik=8JdK90F8aI9J7Q&riu=http%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg&ehk=at%2bW8ahmVDAWSjLun4vkjMUmmlvUD7psBtJ5Bf9jSfA%3d&risl=&pid=ImgRaw&r=0" alt="Profile" />
                   
                </div>
                <div style={{ marginLeft: '102px',marginTop:"-27px"}}>
                <i className="fa-solid fa-pen"></i>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-4">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username" value={adminInfo.username}
                            onChange={(e) => setAdminInfo({ ...adminInfo, username: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email" value={adminInfo.email}
                            onChange={(e) => setAdminInfo({ ...adminInfo, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Current Password:</label>
                        <input
                            type="password"
                            name="oldpassword" value={adminInfo.oldpassword}
                            onChange={(e) => setAdminInfo({ ...adminInfo, oldpassword: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>New Password:</label>
                        <input
                            type="password"
                            name="newpassword" value={adminInfo.newpassword}
                            onChange={(e) => setAdminInfo({ ...adminInfo, newpassword: e.target.value })}
                        />
                    </div>
                    <button type="Update" style={{ background: "#9277ab99" }}>Update Profile</button>
                </form>
            </div>
        </div>
    );
}

export default Setting;
