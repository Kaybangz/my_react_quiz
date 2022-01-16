import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizApp from "./components/QuizApp";
import QuizNote from "./components/QuizNote";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <header>
          <h4>Quiz app created by Kaybangz</h4>
        </header>
        <Routes>
          <Route path="https://kaybangz.github.io/my_react_quiz/" exact element={<QuizNote />} />
          <Route path="https://kaybangz.github.io/my_react_quiz/quiz" exact element={<QuizApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;