import React, { useState } from 'react';
import './Info.css';
import Diagnosis from './Diagnosis';
import Male from '../images/male.PNG';
import Female from '../images/female.PNG';
import { v4 as uuid } from "uuid";

const Chatbox = ({ symptoms = ["Headache", "Anxiety", "Back Pain", "Chest Pain", "Depressed mood", "Diarrhea", "Dizziness", "Hair loss", "Rash", "Red eye", "Sneezing", "Snoring", "Stiff neck", "Burning skin", "Weight gain", "Toothache", "Cough", "Fever", "Nosebleeds", "Chills", "Excessive sweating", "Nausea", "Vomiting", "Fatigue", "Hiccups"] }) => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(18);
  const [symptomStatus, setSymptomStatus] = useState(new Array(symptoms.length).fill('absent'));
  const [color, setColor] = useState(new Array(symptoms.length).fill(false));
  const [submitted, setSubmitted] = useState(false);

  const selectMale = () => setGender('male');
  const selectFemale = () => setGender('female');

  const handleChange = (event) => setAge(event.target.value);

  const changeStatus = (symptom) => {
    const index = symptoms.indexOf(symptom);
    
    const newSymptomStatus = [...symptomStatus];
    newSymptomStatus[index] = 'present';
    setSymptomStatus(newSymptomStatus);

    const newColor = [...color];
    newColor[index] = true;
    setColor(newColor);
  };

  const getColor = (symptom) => {
    const index = symptoms.indexOf(symptom);
    return symptomStatus[index] === 'present' ? 'rgb(92, 156, 252)' : 'rgb(137, 183, 252)';
  };

  const handleSubmit = () => setSubmitted(true);

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
            <img alt="Male" src={Male} className='Information-Male' />
          </div>
          <div
            className='Information-Gender'
            style={{ backgroundColor: gender === 'female' ? 'rgb(180, 180, 180)' : 'rgb(223, 223, 223)' }}
            onClick={selectFemale}
          >
            <img alt="Female" src={Female} className='Information-Female' />
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
              style={{ backgroundColor: getColor(symptom) }}
              onClick={() => changeStatus(symptom)}
            >
              {symptom}
            </div>
          ))}
        </div>
        <input className="Information-Submit" type="submit" value="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Chatbox;
