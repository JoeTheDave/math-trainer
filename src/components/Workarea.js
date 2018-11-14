import React, { useState, useEffect } from 'react';
import { random } from 'lodash';
import '../assets/Workarea.css';
import celebration from '../util/celebration';
import Timer from './Timer';

const displayOperator = (type) => {
  switch (type) {
    case 'addition': return '+';
    case 'subtraction': return '-';
    case 'multiplication': return <span>&times;</span>;
    default: return '';
  }
}

const validAnswer = (problemType, num1, num2) => {
  switch (problemType) {
    case 'addition': return num1 + num2;
    case 'subtraction': return num1 - num2;
    case 'multiplication': return num1 * num2;
    default: return null;
  }
}

const Workarea = ({ minNumber, maxNumber, problemType, setPageView, problemCount }) => {
  const [number1, setNumber1] = useState(random(minNumber, maxNumber));
  const [number2, setNumber2] = useState(random(minNumber, maxNumber));
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(new Date());
  const [userInput, setUserInput] = useState('');

  if (problemType === 'subtraction' && number2 > number1) {
    const num1 = number1;
    const num2 = number2;
    setNumber1(num2);
    setNumber2(num1);
  }

  const keyHandler = (e) => {
    if (/^[0-9]$/.test(e.key)) {
      const newValue = userInput + e.key;
      const newProgress = progress + 1;
      setUserInput(newValue)
      if (parseInt(newValue) === validAnswer(problemType, number1, number2)) {
        celebration.celebrate();
        setTimeout(() => {
          if (problemCount === newProgress) {
            setPageView('Dashboard');
          }
          setUserInput('');
          setNumber1(random(minNumber, maxNumber));
          setNumber2(random(minNumber, maxNumber));
          setTime(new Date());
          setProgress(newProgress);
        }, 500);
      }
    }
    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Backspace') {
      setUserInput('');
    }
    if (e.key === 'Escape') {
      setPageView('Dashboard');
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyHandler, false);
    return () => {
      document.removeEventListener("keydown", keyHandler, false);
    };
  });

  return (
    <div className="work-area">
      <div className="work-area-content">
        <Timer time={time} />
        <div className="problem">
          <div>{number1}</div>
          <div>{number2}</div>
          <div className="operator">{displayOperator(problemType)}</div>
          <div className="baseline" />
        </div>
        <div>{userInput}</div> 
      </div>
    </div>
  );
};

export default Workarea;
