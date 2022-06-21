import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );

}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  );

}

const Feedback = ({ handleFeedback }) => {

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => handleFeedback("good")} text={"good"} />
      <Button onClick={() => handleFeedback("neutral")} text={"neutral"} />
      <Button onClick={() => handleFeedback("bad")} text={"bad"} />
    </>
  );
}

const Statistics = ({ good, neutral, bad }) => {

  const getTotal = () => good + neutral + bad;

  // (good: 1, neutral: 0, bad: -1)
  const getAverage = () => {
    return (good * 1 + neutral * 0 + bad * (-1)) / getTotal();
  }

  const getPositive = () => good * 100 / getTotal();

  // Alternative is with ternary conditional with a single return
  if (getTotal() === 0)
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={getTotal()} />
      <StatisticLine text={"average"} value={getAverage()} />
      <StatisticLine text={"positive"} value={getPositive()} />
    </>
  );

}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        alert("Invalid given feedback!");
    }

  }

  return (
    <div>
      <Feedback handleFeedback={handleFeedback} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App 