import { range, sortBy, mean } from 'lodash';

const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const loadFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

const createDataItem = () => ({
  occurrences: 0,
  list: [],
  average: 0,
})

const getKey = (num1, num2) => sortBy([num1, num2]).join(':');

const createGridData = () => {
  const dataGrid = {};
  range(21).forEach((x) => {
    range(21).forEach((y) => {
      dataGrid[getKey(x, y)] = createDataItem();
    });
  });
  return dataGrid;
};

const createNewDataStore = () => {
  return {
    addition: createGridData(),
    subtraction: createGridData(),
    multiplication: createGridData(),
  };
};

const getDataStore = () => {
  let dataStore = loadFromStorage('main');
  if (!dataStore) {
    dataStore = createNewDataStore();
    saveToStorage('main', dataStore);
  }
  return dataStore;
};

const updateStore = ({ problemType, number1, number2, time }) => {
  const dataStore = getDataStore();
  const key = getKey(number1, number2);
  let dataItem = dataStore[problemType][key];
  const occurrenceList = dataItem.list;
  occurrenceList.push(time);
  dataItem = {
    occurrences: dataItem.occurrences + 1,
    list: occurrenceList,
    average: Math.round(mean(occurrenceList)),
  };
  dataStore[problemType][key] = dataItem;
  saveToStorage('main', dataStore);
};

export default {
  getDataStore,
  updateStore,
  getKey,
};