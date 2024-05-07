import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';


function Header() {
    const location = useLocation();
    return (
        <div className="header-container">
            <header>
                <h4>Logo</h4>
                <div className='head'>
                    {location.pathname === '/over' ? (
                        <Link to={'/home'} className='text-decoration-none text-dark'>  <h4>Home</h4></Link>
                    ) : (
                        <h4>Overview</h4>

                    )}
                </div>
                <div className='head'>
                    <h4>Account 1</h4>
                </div>
                <div>
                    <span className="badge p-2 rounded">Channel 1<i className="fa-solid fa-xmark ms-2"></i></span>
                </div>
                <div className='search'>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-magnifying-glass ms-4"></i>
                </div>
            </header>
        </div>
    );
}

export default Header;
