import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { restartGame } from "../Reducer/slicer/inicialGame";

const End = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quizState.answers);
  const score = useSelector((state) => state.quizState.score);

  const restartHandler = () => {
    dispatch(restartGame());
  };

  return (
    <div className="container-end">
      <h2>End Quiz</h2>
      <p>you score {score} / 10</p>
      <div className="summary-answer">
        {answers.map((answer, index) => {
          return (
            <div
              className={
                answer.answer === answer.correctAnswer
                  ? "item-answer correct"
                  : "item-answer  incorrect"
              }
              key={index}
            >
              <p>
                {index + 1}. {answer.question}
              </p>
              <p>answer : {answer.answer}</p>
            </div>
          );
        })}
      </div>
      <Link to="/" className="button" onClick={restartHandler}>
        Start Quiz
      </Link>
    </div>
  );
};

export default End;
