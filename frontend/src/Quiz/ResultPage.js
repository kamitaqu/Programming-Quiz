import React from "react";
import faker from "@faker-js/faker";

export default function ResultPage({ result, question }) {
  const correctAnswers = [];
  question.map((item) => correctAnswers.push(item.correctAnswer));

  const succesRate = () => {
    let success = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === correctAnswers[i]) {
        success++;
      }
    }
    console.log(success);
    return Math.round((success / correctAnswers.length) * 100) + "%";
  };
  return (
    <div>
      {result.map((item, index) => (
        <div key={faker.datatype.uuid()}>
          Question number: {index + 1}
          <br />
          Your answer: {item}
          <br />
          Correct answer: {correctAnswers[index]}
          <br />
          <br />
        </div>
      ))}
      <h3>Success rate: {succesRate()}</h3>
    </div>
  );
}
