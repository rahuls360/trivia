import React from "react";

class Question extends React.Component {
  state = {
    active: [false, false, false, false]
  };

  handleClick = index => {
    const active = [false, false, false, false];
    active[index] = true;
    this.setState({ active: active });
  };

  render() {
    let options = [...this.props.incorrect_answers, this.props.correct_answer];

    const optionLetters = ["A", "B", "C", "D"];

    return (
      <div className="question">
        <h3>
          Q{this.props.index + 1} {this.props.question}
        </h3>
        <ul>
          {options.map((option, index) => {
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
      </div>
    );
  }
}

export default Question;
