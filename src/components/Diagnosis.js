import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Diagnosis.css';
import { v4 as uuid } from 'uuid';

const Diagnosis = (props) => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      const patientData = {
        sex: props.sex,
        age: { value: parseInt(props.age, 10) },
        evidence: props.symptomStatus.map((status, index) => ({
          id: `s_${[21, 120, 1190, 50, 169, 8, 370, 121, 417, 492, 715, 67, 418, 1165, 226, 551, 102, 98, 1429, 81, 216, 156, 305, 2100, 1295][index]}`,
          choice_id: status,
        })),
      };

      const options = {
        url: 'https://api.infermedica.com/v3/diagnosis',
        method: 'POST',
        headers: {
          'App-Id': process.env.REACT_APP_API_ID,
          'App-Key': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(patientData),
      };

      try {
        const response = await axios.request(options);
        setConditions(response.data.conditions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDiagnosis();
  }, [props.sex, props.age, props.symptomStatus]);

  return (
    <div className='Diagnosis'>
      <div className='modal'>
        
        <h1>Potential Diagnosis</h1>
        {conditions.length > 0 ? (
          conditions.map((condition) => <h2 key={uuid()}>{condition.name}</h2>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Diagnosis;
