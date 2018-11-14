import React from 'react';
import { range } from 'lodash';
import '../assets/SelectionGrid.css';

const SelectionGrid = ({ min, max, problemType, show }) => {
  const problemTypes = {
    addition: '+',
    subtraction: '-',
    multiplication: '×'
  }
  return (
    <div className={`selection-grid${show ? ' show' : ''}`}>
      {
        range(21).map((x) => {
          return range(21).map((y) => {
            return (
              <div key={`${x}-${y}`} className={`selection-grid-square${x >= min && x <= max && y >= min && y <= max ? ' selected' : ''}`}>
                {`${x}${problemTypes[problemType]}${y}`}
              </div>
            );
          })
        })
      }
    </div>
  );
};

export default SelectionGrid;
