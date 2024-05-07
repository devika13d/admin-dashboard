import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import BarChartIcon from '@mui/icons-material/BarChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchWeather } from '../Redux/dashSlice';
import Header from './Header';
import './home.css';

function Home() {
  const dispatch = useDispatch()
  const settings = {
    width: 200,
    height: 200,
    value: 60,
  };
  useEffect(() => {
    dispatch(fetchWeather())
    dispatch(fetchUsers())
  }, []);
  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  const allWeather = useSelector((state) => state.dashSlice.weather.main)
  console.log(allWeather);
  const allUsers = useSelector((state) => state.dashSlice.users)
  console.log(allUsers);
  return (
    <div className='container-fluid'>
      <Header />
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-7'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <div className='card-title'>
                    <i className='fa-regular fa-hand-point-up'></i>
                  </div>
                  <div className='align-items-center d-flex justify-content-center calender'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar
                        showDaysOutsideCurrentMonth
                        fixedWeekNumber={6}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <div className='card-title'>
                    <SettingsAccessibilityIcon />
                  </div>
                  <div className='align-items-center d-flex justify-content-center calender'>
                    {allUsers.length > 0 ? (
                      <div className='align-items-center justify-content-center'>
                        <Gauge
                          {...settings}
                          cornerRadius='50%'
                          value={allUsers.length}
                          sx={(theme) => ({
                            [`& .${gaugeClasses.valueText}`]: {
                              fontSize: 40,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                              fill: '#52b202',
                            },
                            [`& .${gaugeClasses.referenceArc}`]: {
                              fill: theme.palette.text.disabled,
                            },
                          })}
                        />
                        <div>Total users: {allUsers.length}</div>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 mt-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className='card-title'>
                    <BarChartIcon />
                  </div>
                  <div className='align-items-center d-flex justify-content-center calender'>
                    {allWeather ? (
                      <BarChart
                        xAxis={[{ scaleType: 'band', data: Object.entries(allWeather).map(([key, value]) => `${key}: ${value}`) }]}
                        series={[{ data: Object.values(allWeather), label: 'Weather Data' }]}
                        width={500}
                        height={300}
                      />
                    ) : (
                      <p>Loading...</p>
                    )}

                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 mt-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className='card-title'>
                    <DonutLargeIcon />
                  </div>
                  {allWeather ? (
                    <PieChart
                      series={[
                        {
                          data,
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                      ]}
                      height={200}
                    />
                  ) : (
                    <p>Loading...</p>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
