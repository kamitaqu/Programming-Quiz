import StartButton from "./Quiz/StartButton";

function App() {
  const todos = [
    {id:1, completed:false, title: "Buy bread"},
    {id:2, completed:false, title: "Buy butter"},
    {id:3, completed:false, title: "Buy milk"}
  ]
  return (
   <div className ='wrapper'>
     <h1>Programming Quiz</h1>

    <StartButton></StartButton>
   </div>
  );
}

export default App;
