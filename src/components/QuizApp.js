import React, { useState } from "react";
import "./QuizStyle.css";
import { Link } from "react-router-dom";
import { questions } from "./QuizQuestions";
import failure from "./images/failure.gif";
import success from "./images/success.gif";

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0);

  const answerBtnClick = (correctAns) => {
    //If statement to denote what happens if user selects the correct answer
    if (correctAns === true) {
      setScore(score + 5);
    }

    const nextQuestion = currentQuestionIndex + 1;

    //Determine the current index of question
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      //Set
      setQuizEnd(true);
    }
  };

  return (
    <main className="container_wrapper quizApp_container">
      <div className="container">
        {quizEnd ? (
          <div>
            <div className="quiz_end_box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <h5>Quiz completed!</h5>
                <Link to="/">
                  <button className="body_btn">Go back</button>
                </Link>
              </div>
              <h3 style={{ marginTop: "-25px", marginBottom: ".1em" }}>
                You scored {score} out of 100
              </h3>
              <div>
                {score <= 50 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: "red" }}>I think you can do better</p>
                    <div className="img_sizing">
                      <img src={failure} alt="success_image" />
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: "green" }}>You did great!</p>
                    <div className="img_sizing">
                      <img src={success} alt="success_image" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="top">
              <h4>
                Question {currentQuestionIndex + 1} out of {questions.length}
              </h4>
            </div>

            <div>{questions[currentQuestionIndex].qText}</div>

            <div className="grid_display">
              {questions[currentQuestionIndex].options.map((answer) => {
                return (
                  <button
                    className="body_btn"
                    onClick={() => answerBtnClick(answer.isCorrect)}
                    key={answer.aText}
                  >
                    {answer.aText}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default QuizApp;
