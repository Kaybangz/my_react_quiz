import React from "react";
import "./QuizStyle.css";
import { Link } from "react-router-dom";

const QuizNote = () => {
  return (
    <main className="container_wrapper">
      <div className="container instructions_wrapper">
        <h2>Note:</h2>
        <ul>
          <li>There is a total of 20 questions. </li>
          <li>5 points would be added to score if answer is correct </li>
          <li>No point would be added to score if answer is wrong </li>
        </ul>

        <div style={{ marginTop: "10px" }}>
          <Link style={{ marginRight: "10px" }} to="/quizApp">
            <button className="body_btn">Start Quiz</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default QuizNote;
