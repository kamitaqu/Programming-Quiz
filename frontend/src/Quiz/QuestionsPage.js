import React, { createRef, useEffect, useRef } from "react";

export default function QuestionsPage({ question, handleSubmit, result }) {
  function selectOnlyThis(id) {
    const answers = question.answers;
    for (var i = 0; i < answers.length; i++) {
      document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
  }

  const uncheck = () => {
    refsArray.map((item) => (item.current.checked = false));
  };

  let answer;

  const handleInput = (event) => {
    answer = event.target.value;
    selectOnlyThis(event.target.id);
  };

  const noneSelected = () => {
    const last = result.length - 1;
    if (!result[last]) {
      alert("Choose your answer");
      return true;
    }
  };

  const handleButtonSubmit = () => {
    result.push(answer);
    uncheck();
    if (!noneSelected()) {
      handleSubmit();
    } else {
      result.pop();
    }
  };

  const answers = question.answers;
  const refsArray = answers.map(() => createRef());
  return (
    <div>
      <h2>{question.question}</h2>
      {question.answers.map((ans, index) => (
        <h2>
          <input
            id={index}
            type="checkbox"
            onClick={(e) => handleInput(e)}
            value={ans}
            ref={refsArray[index]}
          />
          {ans}
        </h2>
      ))}
      <button onClick={handleButtonSubmit} type="submit">
        Submit answer
      </button>
    </div>
  );
}
