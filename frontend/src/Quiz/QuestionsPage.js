import React, { useRef } from "react";

export default function QuestionsPage({ question, handleSubmit, result }) {
  function selectOnlyThis(id) {
    for (var i = 1; i <= 2; i++) {
      document.getElementById("check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
  }

  const input1 = useRef(null);
  const input2 = useRef(null);

  const uncheck = () => {
    input1.current.checked = false;
    input2.current.checked = false;
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

  return (
    <div>
      <h2>{question.question}</h2>
      <p>
        <input
          id="check1"
          onClick={(e) => handleInput(e)}
          type="checkbox"
          ref={input1}
          value={question.answer1}
        />
        {question.answer1}
      </p>
      <p>
        <input
          id="check2"
          onClick={(e) => handleInput(e)}
          type="checkbox"
          ref={input2}
          value={question.answer2}
        />
        {question.answer2}
      </p>
      <button onClick={handleButtonSubmit} type="submit">
        Submit answer
      </button>
    </div>
  );
}
