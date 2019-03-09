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
    data: data.results,
    scores: Array(data.results.length).fill(0)
  };

  updateScore = id => {
    const scores = this.state.scores;
    scores[id] = 1;
    this.setState({ scores: scores });
  };

  calculateResult = () => {
    let sum = this.state.scores.reduce((result, score) => {
      return result + score;
    }, 0);
    console.log(sum);
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
                updateScore={this.updateScore}
              />
            );
          })}
          <button
            onClick={this.calculateResult}
            className="btn btn-info results"
          >
            View Results
          </button>
        </div>
      </div>
    );
  }
}

export default App;
