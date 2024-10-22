import React from 'react';
import './Gender.css';

const Gender = () => {
  return (
    <div className='Gender'>
      <h1 className='Gender-Title'>What is your sex?</h1>
      <div className='Gender-Content'>
        <label>
          <input type="radio" name="gender" value="male" /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" /> Female
        </label>
        <label>
          <input type="radio" name="gender" value="other" /> Other
        </label>
      </div>
    </div>
  );
};

export default Gender;
