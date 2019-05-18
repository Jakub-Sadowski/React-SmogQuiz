import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> za pierwszą próbą.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> za drugą próbą.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> za trzecią próbą.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> za czwartą próbą.</div>;
  
  return (
    <div className="results-container">
      <h2>Wyniki Quiz'u</h2>
      <div>Odpowiedziałeś:</div>
      {oneTry}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Twój całkowity wynik <strong>{score}</strong>.</div>
      <a onClick={restartQuiz}>Ponów Quiz</a>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
