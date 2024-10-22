import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
        params: { country: 'World' },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
      };
      
      try {
        const response = await axios.request(options); //request for covid data
        setData(response.data.data); // Store the data from the API response
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      <div className="Dashboard">
        <h1 className="Dashboard-title">COVID-19 Dashboard</h1>
        <div className="Dashboard-items">
          <h1 className="Confirmed">Confirmed Cases: {data.confirmed}</h1>
          <h1 className="Recovered">Recovered: {data.recovered}</h1>
          <h1 className="Deaths">Deaths: {data.deaths}</h1>
          <h1 className="lastChecked">Last Checked: {data.lastChecked}</h1>
          <h1 className="lastReported">Last Reported: {data.lastReported}</h1>
        </div>
        <div className="Button3">
          <h1><Link className='App-link' to='/'>Go Home</Link></h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
