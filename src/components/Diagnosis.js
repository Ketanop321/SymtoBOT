import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Diagnosis.css';
import { v4 as uuid } from "uuid";

// Load environment variables (this won't be needed in React as React automatically picks env variables prefixed with REACT_APP_)
// require('dotenv').config(); // This is for Node.js environments

const Diagnosis = (props) => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      const patientData = {
        sex: props.sex,
        age: {
          value: parseInt(props.age, 10),
        },
        evidence: [
          { id: "s_21", choice_id: props.symptomStatus[0], source: "initial" },
          { id: "s_120", choice_id: props.symptomStatus[1] },
          { id: "s_1190", choice_id: props.symptomStatus[2] },
          { id: "s_50", choice_id: props.symptomStatus[3] },
          { id: "s_169", choice_id: props.symptomStatus[4] },
          { id: "s_8", choice_id: props.symptomStatus[5] },
          { id: "s_370", choice_id: props.symptomStatus[6] },
          { id: "s_121", choice_id: props.symptomStatus[7] },
          { id: "s_417", choice_id: props.symptomStatus[8] },
          { id: "s_492", choice_id: props.symptomStatus[9] },
          { id: "s_715", choice_id: props.symptomStatus[10] },
          { id: "s_67", choice_id: props.symptomStatus[11] },
          { id: "s_418", choice_id: props.symptomStatus[12] },
          { id: "s_1165", choice_id: props.symptomStatus[13] },
          { id: "s_226", choice_id: props.symptomStatus[14] },
          { id: "s_551", choice_id: props.symptomStatus[15] },
          { id: "s_102", choice_id: props.symptomStatus[16] },
          { id: "s_98", choice_id: props.symptomStatus[17] },
          { id: "s_1429", choice_id: props.symptomStatus[18] },
          { id: "s_81", choice_id: props.symptomStatus[19] },
          { id: "s_216", choice_id: props.symptomStatus[20] },
          { id: "s_156", choice_id: props.symptomStatus[21] },
          { id: "s_305", choice_id: props.symptomStatus[22] },
          { id: "s_2100", choice_id: props.symptomStatus[23] },
          { id: "s_1295", choice_id: props.symptomStatus[24] },
        ],
      };

      const options = {
        url: 'https://api.infermedica.com/v3/diagnosis',
        method: 'POST',
        headers: {
          'App-Id': process.env.REACT_APP_API_ID,  // Use environment variables
          'App-Key': process.env.REACT_APP_API_KEY,  // Use environment variables
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(patientData),
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.conditions);
        setConditions(response.data.conditions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDiagnosis();
  }, [props.sex, props.age, props.symptomStatus]);

  return (
    <div className='Diagnosis'>
      <h1>Potential Diagnosis:</h1>
      {conditions.map((m) => (
        <h1 key={uuid()}>{m.name}</h1>
      ))}
    </div>
  );
};

export default Diagnosis;
