import React from 'react';
import '../assets/Dashboard.css';
import ReactSlider from 'react-slider';

import SelectionGrid from './SelectionGrid';

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
  showAdvancedInfo,
  setShowAdvancedInfo,
}) => {
  return (
    <div className="dashboard">
      <div className="controls-container">
        <div className={`dashboard-content${showAdvancedInfo ? ' shift' : ''}`}>
          <div className="advanced-settings-button" onClick={() => { setShowAdvancedInfo(!showAdvancedInfo) }}>{`${showAdvancedInfo ? 'Hide' : 'Show'} Advanced Settings`}</div>
          <div className="dashboard-text">
          {`Use numbers between ${minNumber} and ${maxNumber}`}
          </div>
          <div className="slider-container">
            <ReactSlider
              min={0}
              max={20}
              step={1}
              minDistance={3}
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
            <div className={`problem-type multiplication${problemType === 'multiplication' ? ' selected' : ''}`} onClick={() => { setProblemType('multiplication') }}>×</div>
          </div>
          <div className="start-button" onClick={() => { setPageView('Workarea') }}>Start</div>
        </div>
        <SelectionGrid min={minNumber} max={maxNumber} problemType={problemType} show={showAdvancedInfo} />
      </div>
    </div>
  );
};

export default App;
