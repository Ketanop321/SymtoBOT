import React, { useState } from 'react';
import './Info.css';
import Diagnosis from './Diagnosis';
import Male from '../images/male.PNG';
import Female from '../images/female.PNG';
import { v4 as uuid } from 'uuid';

const Chatbox = (props) => {
  // Default Props
  const defaultSymptoms = [
    'Headache', 'Anxiety', 'Back Pain', 'Chest Pain', 'Depressed mood', 'Diarrhea', 'Dizziness', 'Hair loss', 'Rash',
    'Red eye', 'Sneezing', 'Snoring', 'Stiff neck', 'Burning skin', 'Weight gain', 'Toothache', 'Cough', 'Fever', 
    'Nosebleeds', 'Chills', 'Excessive sweating', 'Nausea', 'Vomiting', 'Fatigue', 'Hiccups',
  ];
  
  const { symptoms = defaultSymptoms } = props;

  // State management using Hooks
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(18);
  const [symptomStatus, setSymptomStatus] = useState(Array(symptoms.length).fill('absent'));
  const [color, setColor] = useState(Array(symptoms.length).fill(false));
  const [submitted, setSubmitted] = useState(false);

  // Functions for gender selection
  const selectMale = () => setGender('male');
  const selectFemale = () => setGender('female');

  // Handle age change
  const handleChange = (event) => setAge(event.target.value);

  // Change symptom status and color
  const changeStatus = (symptom) => {
    const index = symptoms.indexOf(symptom);
    const newSymptomStatus = [...symptomStatus];
    const newColor = [...color];

    newSymptomStatus[index] = 'present';
    newColor[index] = true;

    setSymptomStatus(newSymptomStatus);
    setColor(newColor);
  };

  // Handle form submission
  const handleSubmit = () => setSubmitted(true);

  // Get color for symptoms
  const getColor = (symptom) => {
    const index = symptoms.indexOf(symptom);
    return symptomStatus[index] === 'present' ? 'rgb(92, 156, 252)' : 'rgb(137, 183, 252)';
  };

  return (
    <div className='Information'>
      {submitted && <Diagnosis sex={gender} age={age} symptomStatus={symptomStatus} />}
      <div className='Information-General'>
        <h1 className='Information-Title'>Please Select Your Sex: {gender}</h1>
        <div className='Information-Genders'>
          <div
            className='Information-Gender'
            style={{ backgroundColor: gender === 'male' ? 'rgb(180, 180, 180)' : 'rgb(223, 223, 223)' }}
            onClick={selectMale}
          >
            <img alt="" src={Male} className='Information-Male'></img>
          </div>
          <div
            className='Information-Gender'
            style={{ backgroundColor: gender === 'female' ? 'rgb(180, 180, 180)' : 'rgb(223, 223, 223)' }}
            onClick={selectFemale}
          >
            <img alt="" src={Female} className='Information-Female'></img>
          </div>
        </div>

        <h1 className='Information-Title'>Please Select Your Age: </h1>
        <div className='Information-Age'>
          <input
            type="range"
            className="Information-AgeSlider"
            id="age"
            min="0"
            max="130"
            value={age}
            onChange={handleChange}
          />
          <h2 className='Information-AgeText'>{age}</h2>
        </div>
      </div>

      <div className='Information-Symptoms'>
        <h1 className='Information-Title'>Please Select Your Symptoms:</h1>
        <div className='Information-SymptomList'>
          {symptoms.map((symptom) => (
            <div
              key={uuid()}
              id={symptom}
              className="Information-Symptom"
              style={{ backgroundColor: color[symptoms.indexOf(symptom)] ? 'rgb(92, 156, 252)' : 'rgb(137, 183, 252)' }}
              onClick={() => changeStatus(symptom)}
            >
              {symptom}
            </div>
          ))}
        </div>
        <input
          className="Information-Submit"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Chatbox;
