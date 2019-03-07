import React, { Component } from "react";
import data from "./api.json";

//import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import Question from "./components/Question.js";
if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    data: data.results
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">Welcome to Trivia</h1>
          {this.state.data.map((singleQuestionData, index) => {
            return (
              <Question
                question={singleQuestionData.question}
                key={index}
                index={index}
                incorrect_answers={singleQuestionData.incorrect_answers}
                correct_answer={singleQuestionData.correct_answer}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
