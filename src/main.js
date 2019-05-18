import React from 'react';
import { render } from 'react-dom';
import QuizApp from './components/QuizApp';
import './style.css';

render(
  <QuizApp totalQuestions={5} />,
  document.getElementById('app')
);
