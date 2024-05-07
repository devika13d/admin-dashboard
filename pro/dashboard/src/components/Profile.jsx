import React, { useEffect } from 'react';
import Header from './Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux/dashSlice';
import { LineChart } from '@mui/x-charts/LineChart';
import './profile.css';

function Profile() {
    const allUsers = useSelector((state) => state.dashSlice.users);
    const dispatch = useDispatch();
    console.log(allUsers);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const rows = allUsers.map((user) => ({
        email: user.email,
        password: user.website,
        phone: user.phone,
        location: user.address
    }));

    return (
        <div className='container-fluid'>
            <Header />
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <div className='row'>
                        <div className='col-md-6 w-95'>
                            <div className="profile-picture d-flex align-items-center">
                                <img src="https://th.bing.com/th/id/R.9f909e47ddfdd7ab255971b2575dcfb8?rik=8JdK90F8aI9J7Q&riu=http%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg&ehk=at%2bW8ahmVDAWSjLun4vkjMUmmlvUD7psBtJ5Bf9jSfA%3d&risl=&pid=ImgRaw&r=0" alt="Profile" />
                                <div className="profile-content">
                                    <h4 style={{ marginLeft: "95px" }}>Martha</h4>
                                    <h1 style={{ marginLeft: "95px",opacity: 0.4 }}>Administrator</h1>
                                </div>
                            </div>
                            <div className='card-body mt-3'>
                                <div className='card-title text-center'>
                                    <h4 className='text-center'>Analytics</h4>
                                </div>
                            </div> 
                            <div className='mt-4'>
                                <TableContainer component={Paper} className='w-100'>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Email</TableCell>
                                                <TableCell align="right">Password</TableCell>
                                                <TableCell align="right">Phone</TableCell>
                                                <TableCell align="right">Location</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">{row.email}</TableCell>
                                                    <TableCell align="right">{row.password}</TableCell>
                                                    <TableCell align="right">{row.phone}</TableCell>
                                                    <TableCell align="right">{`${row.location.city}`}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                        <div className="user-statistics text-center col-md-3 col-sm-6">
                            <h2>User Statistics</h2>
                            <p>Total Users: 100</p>
                            <p>Active Users: 80</p>
                            <p>Inactive Users:20</p>
                            <div className='text-center align-items-center  text-light w-100 '>
                                <LineChart
                                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                    series={[
                                        {
                                            data: [0, 5.5, 2, 8.5, 1.5, 10],
                                        },
                                    ]}
                                    height={300}
                                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                                    grid={{ vertical: true, horizontal: true }}
                                />
                            </div>
                        </div>
                        <div className="user-images col-md-3 col-sm-6">
                            <h2>User Images</h2>
                            <div className="image-grid d-flex flex-wrap">
                                <img src="https://i0.wp.com/bfamilyeyecare.com/wp-content/uploads/2022/09/BFamily_2-400x500.png" alt="User 1" />
                                <img src="https://th.bing.com/th/id/OIP.KekkbDlWLdeyZmLhJk7_YQHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.3" alt="User 2" />
                                <img src="https://i0.wp.com/bfamilyeyecare.com/wp-content/uploads/2022/09/BFamily_2-400x500.png" alt="User 3" />
                                <img src="https://th.bing.com/th/id/OIP.JYah8mVgCGrCfALJiz3j1gAAAA?pid=ImgDet&w=199&h=199&c=7&dpr=1.3" alt="User 3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    );
}

export default Profile;
