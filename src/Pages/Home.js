import React from 'react';
import './Home.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      {/* <div className = "RightPage">
        <Cards/>
      </div> */}
      <div className="LeftPage">
        <Header />
      </div>
      {/* <img alt="" src={HealthImage} className="HealthImage" /> */}
    </div>
  );
};

export default Home;
