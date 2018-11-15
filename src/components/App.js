import React, { useState, useEffect } from 'react';
import '../assets/App.css';
import celebration from '../util/celebration';
import Dashboard from './Dashboard';
import Workarea from './Workarea';

const App = () => {
  const [pageView, setPageView] = useState('Dashboard');
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(10);
  const [problemCount, setProblemCount] = useState(20);
  const [problemType, setProblemType] = useState('addition');
  const [showAdvancedInfo, setShowAdvancedInfo] = useState(true);

  const props = {
    pageView,
    setPageView,
    minNumber,
    setMinNumber,
    maxNumber,
    setMaxNumber,
    problemCount,
    setProblemCount,
    problemType,
    setProblemType,
    showAdvancedInfo,
    setShowAdvancedInfo,
  }

  const pages = {
    Dashboard,
    Workarea,
  };
  const SelectedPageView = pages[pageView];

  useEffect(() => {
    celebration.initialize();
  }, []);

  return (
    <div className="app">
      <SelectedPageView {...props} />
      <div className="celebration">
        <canvas id="canvas">Canvas is not supported in your browser.</canvas>
      </div>
    </div>
  );
};

export default App;
