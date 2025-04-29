import React, { useState } from 'react';

const ContactUs = () => {
  const [student, setStudent] = useState({
    rollno: '',
    name: '',
    phy: '',
    che: '',
    math: '',
    eng: '',
    hindi: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const calculateResult = () => {
    const { phy, che, math, eng, hindi } = student;
    const marks = [Number(phy), Number(che), Number(math), Number(eng), Number(hindi)];
    const total = marks.reduce((acc, mark) => acc + mark, 0);
    const percentage = total / 5;

    let division = '';
    if (percentage >= 60) {
      division = 'First Division';
    } else if (percentage >= 45) {
      division = 'Second Division';
    } else if (percentage >= 33) {
      division = 'Third Division';
    } else {
      division = 'Fail';
    }

    setResult({
      total,
      percentage: percentage.toFixed(2),
      division
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Student Marks Form</h2>
      <input name="rollno" placeholder="Roll No" onChange={handleChange} /><br />
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="phy" placeholder="Physics" type="number" onChange={handleChange} /><br />
      <input name="che" placeholder="Chemistry" type="number" onChange={handleChange} /><br />
      <input name="math" placeholder="Math" type="number" onChange={handleChange} /><br />
      <input name="eng" placeholder="English" type="number" onChange={handleChange} /><br />
      <input name="hindi" placeholder="Hindi" type="number" onChange={handleChange} /><br /><br />
      <button onClick={calculateResult}>Calculate</button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result</h3>
          <p>Total Marks: {result.total}</p>
          <p>Percentage: {result.percentage}%</p>
          <p>Division: {result.division}</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;