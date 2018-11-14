import React from 'react';
import ReactSlider from 'react-slider';
import '../assets/Dashboard.css';

const App = ({
  minNumber,
  setMinNumber,
  maxNumber,
  setMaxNumber,
  problemCount,
  setProblemCount,
  problemType,
  setProblemType,
  setPageView,
}) => {
  
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="dashboard-text">
        {`Use numbers between ${minNumber} and ${maxNumber}`}
        </div>
        <div className="slider-container">
          <ReactSlider
            min={0}
            max={20}
            step={1}
            minDistance={1}
            value={[minNumber, maxNumber]}
            withBars
            pearling
            onChange={(values) => {
              setMinNumber(values[0]);
              setMaxNumber(values[1]);
            }}
          >
            <div className="slider-handle" />
            <div className="slider-handle" />
          </ReactSlider>
        </div>
        <div className="dashboard-text">
        {`Let's do ${problemCount} problems`}
        </div>
        <div className="slider-container">
          <ReactSlider
            min={1}
            max={100}
            step={1}
            value={problemCount}
            withBars
            onChange={(value) => setProblemCount(value)}
          >
            <div className="slider-handle" />
          </ReactSlider>
        </div>
        <div className="type-selection">
          <div className={`problem-type addition${problemType === 'addition' ? ' selected' : ''}`} onClick={() => { setProblemType('addition') }}>+</div>
          <div className={`problem-type subtraction${problemType === 'subtraction' ? ' selected' : ''}`} onClick={() => { setProblemType('subtraction') }}>-</div>
          <div className={`problem-type multiplication${problemType === 'multiplication' ? ' selected' : ''}`} onClick={() => { setProblemType('multiplication') }}>&times;</div>
        </div>
        <div className="start-button" onClick={() => { setPageView('Workarea') }}>Start</div>
        
      </div>
    </div>
  );
};

export default App;
