import React from "react";

class Question extends React.Component {
  render() {
    const options = this.props.incorrect_answers;
    options.push(this.props.correct_answer);
    return (
      <div className="question">
        <h3>
          Q{this.props.index + 1} {this.props.question}
        </h3>
        <ul>
          {options.map(option => {
            return <li>{option}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Question;
