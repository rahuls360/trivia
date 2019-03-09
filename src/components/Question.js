import React from "react";

class Question extends React.Component {
  state = {
    active: [false, false, false, false],
    initialLoadFlag: true
  };

  handleClick = index => {
    const active = [false, false, false, false];
    active[index] = true;
    if (this.options[index] === this.props.correct_answer) {
      this.answerIsCorrect = true;
      this.props.updateScore(this.props.index);
    } else {
      this.answerIsCorrect = false;
    }
    this.setState({ active: active });
  };

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  render() {
    if (this.state.initialLoadFlag) {
      this.options = this.shuffleArray([
        ...this.props.incorrect_answers,
        this.props.correct_answer
      ]);
      this.setState({ initialLoadFlag: false });
    }

    const optionLetters = ["A", "B", "C", "D"];

    let optionsJSX;
    if (this.props.testFlag) {
      optionsJSX = (
        <ul>
          {this.options.map((option, index) => {
            return (
              <li
                className={
                  this.state.active[index] && this.answerIsCorrect
                    ? "option correct"
                    : this.state.active[index] && !this.answerIsCorrect
                    ? "option wrong"
                    : this.options[index] === this.props.correct_answer
                    ? "option correct"
                    : "option"
                }
                onClick={() => this.handleClick(index)}
                key={`option${index}`}
              >
                <span>{optionLetters[index]})</span>
                {option}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionsJSX = (
        <ul>
          {this.options.map((option, index) => {
            return (
              <li
                className={
                  this.state.active[index] ? "option selected" : "option"
                }
                onClick={() => this.handleClick(index)}
                key={`option${index}`}
              >
                <span>{optionLetters[index]})</span>
                {option}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className="question">
        <h3>
          Q{this.props.index + 1} {this.props.question}
        </h3>
        {optionsJSX}
      </div>
    );
  }
}

export default Question;
