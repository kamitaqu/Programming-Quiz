import StartPage from "./Quiz/StartPage";
import QuestionsPage from "./Quiz/QuestionsPage";
import { useState } from "react";
const questions = [
  { question: "React is hard?", answers: ["Yes", "No", "I dont know"] },
  {
    question: "Which HTML5 element defines navigation links?",
    answers: ["navigation", "links", "nav", "navigate"],
  },
  { question: "HTML ID's can only be used once", answers: ["True", "False"] },
];

const result = [];

function App() {
  const START_PAGE = 0;
  const QUESTIONS_PAGE = 1;

  const [page, setPage] = useState(START_PAGE);
  const [questionNumber, setQuestionNumber] = useState(0);

  const questionsAmount = questions.length;

  const handleSubmit = () => {
    if (questionNumber + 1 !== questionsAmount) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
      setPage(START_PAGE);
    }
  };

  const switchPage = (page) => {
    setPage(page);
    console.log(result);
  };
  const renderPage = (page) => {
    switch (page) {
      case START_PAGE:
        return <StartPage onClick={() => switchPage(QUESTIONS_PAGE)} />;
      case QUESTIONS_PAGE:
        return (
          <QuestionsPage
            result={result}
            handleSubmit={handleSubmit}
            question={questions[questionNumber]}
          />
        );
      default:
        return "";
    }
  };
  return (
    <div className="wrapper">
      <h1>Programming Quiz</h1>
      {renderPage(page)}
    </div>
  );
}

export default App;
