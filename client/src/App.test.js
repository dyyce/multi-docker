import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {});

it('what', () => {
  const sum = (sum1, sum2) => {
    return sum1 + sum2
  }

  expect(sum(1,2)).toEqual(3);
})