import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import Graph from '../images/graph.jpg';
import Aboutus from '../images/aboutus.png';
import Contact from '../images/contact.png';

const Cards = () => {
  return (
    <div className="Cards">
      <div>
        <h1 className="Resources-Title">Other Resources</h1>
      </div>
      <Link className='Card' to='/Dashboard'>
        <div className="DashboardCard">
          <div>
            <h2 className="DashboardLink">COVID-19 Dashboard</h2>
          </div>
          <img alt="" src={Graph} className="Graph" />
        </div>
      </Link>
      <Link className='Card' to='/About'>
        <div>
          <h2 className="AboutCardLink">About Us</h2>
        </div>
        <img alt="" src={Aboutus} className="Aboutus" />
      </Link>
      <Link className='Card' to='/Contact'>
        <div>
          <h2 className="ContactCardLink">Contact</h2>
        </div>
        <img alt="" src={Contact} className="Contact" />
      </Link>
    </div>
  );
};

export default Cards;
