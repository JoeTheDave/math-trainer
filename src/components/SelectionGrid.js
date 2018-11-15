import React from 'react';
import { range, sortBy, first, last } from 'lodash';
import { scaleLinear } from 'd3-scale';
import '../assets/SelectionGrid.css';
import dataStorage from '../util/dataStorage';

const SelectionGrid = ({ min, max, problemType, show }) => {
  const problemTypes = {
    addition: '+',
    subtraction: '-',
    multiplication: '×',
  };

  const data = dataStorage.getDataStore();
  const instanceAverages = sortBy(data[problemType], (i) => i.average).filter((i) => i.occurrences !== 0).map((i) => i.average);

  const colorScale = scaleLinear()
    .domain([first(instanceAverages), last(instanceAverages)])
    .range(['#0A0', '#F00']);

  
  return (
    <div className={`selection-grid${show ? ' show' : ''}`}>
      {
        range(21).map((x) => {
          return range(21).map((y) => {
            const key = dataStorage.getKey(x, y);
            const dataItem = data[problemType][key];
            return (
              <div
                key={`${problemType}-${key}`}
                className={`selection-grid-square${x >= min && x <= max && y >= min && y <= max ? ' selected' : ''}`}
                style={{ backgroundColor: dataItem.occurrences === 0 ? 'black' : colorScale(dataItem.average) }}
                title={`(${x} ${problemTypes[problemType]} ${y}) ${dataItem.occurrences} - ${Math.round(dataItem.average / 10) /100}s`}
              >
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
