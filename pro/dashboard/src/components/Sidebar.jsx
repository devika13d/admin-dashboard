import React from 'react';
import './sidebar.css';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    return (
        <div className="container-fluid sidebar-container">
            <div className="row">
                <div className="col-md-3">
                    <div className="profile-picture">
                        <img src="https://th.bing.com/th/id/R.9f909e47ddfdd7ab255971b2575dcfb8?rik=8JdK90F8aI9J7Q&riu=http%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg&ehk=at%2bW8ahmVDAWSjLun4vkjMUmmlvUD7psBtJ5Bf9jSfA%3d&risl=&pid=ImgRaw&r=0" alt="Profile" />
                    </div>
                    <div className="profile-content">
                        <h1>Martha</h1>
                    </div>
                    <div className='content'>
                        <h1>martha@gmail.com</h1>
                    </div>
                    <div className='side'>
                        <ul>
                            {location.pathname === '/over' ? (
                              <Link to={'/home'} className='text-decoration-none text-dark'>  <li><i className="fa-solid fa-eye"></i>Home</li></Link>
                            ) : (
                                <Link to={'/over'} className='text-decoration-none text-dark'>
                                    <li><i className="fa-solid fa-eye"></i>Dashboard</li>
                                </Link>
                            )}
                            <Link to={'/over'} className='text-decoration-none text-dark'>
                                <li><i className="fa-solid fa-user"></i>Profile</li>
                            </Link>
                            <Link to={'/settings'} className='text-decoration-none text-dark'>
                            <li><i className="fa-solid fa-gear"></i>Settings</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
