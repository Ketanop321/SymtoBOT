import React from 'react';
import { Link } from 'react-router-dom';
import './SymptomChecker.css';
import Chatbox from '../components/Chatbox';

const SymptomChecker = () => {
  return (
    <div className="SymptomChecker">
      <h1 className="SymptomChecker-Title">Symptom Checker</h1>
      <Chatbox />
      <div className="BackHome">
        <h1><Link className='App-link' to='/'>Go Home</Link></h1>
      </div>
    </div>
  );
};

export default SymptomChecker;
