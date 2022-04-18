import React, { createRef, useEffect, useRef } from "react";
import faker from "@faker-js/faker";

export default function QuestionsPage({ question, handleSubmit, result }) {
  function selectOnlyThis(event) {
    refsArray.map((item) => (item.current.checked = false));
    event.target.checked = true;
  }

  const uncheck = () => {
    refsArray.map((item) => (item.current.checked = false));
  };

  let answer;

  const handleInput = (event) => {
    answer = event.target.value;
    selectOnlyThis(event);
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
        <h3 key={faker.datatype.uuid()}>
          <input
            id={index}
            type="checkbox"
            onClick={(e) => handleInput(e)}
            value={ans}
            ref={refsArray[index]}
          />
          &nbsp;
          {ans}
        </h3>
      ))}
      <button onClick={handleButtonSubmit} type="submit">
        Submit answer
      </button>
    </div>
  );
}
