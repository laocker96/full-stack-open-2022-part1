import { useState } from 'react'

const ReviewButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );

}

const Feedback = ({ handleFeedback }) => {

  return (
    <>
      <h1>give feedback</h1>
      <ReviewButton onClick={() => handleFeedback("good")} text={"good"} />
      <ReviewButton onClick={() => handleFeedback("neutral")} text={"neutral"} />
      <ReviewButton onClick={() => handleFeedback("bad")} text={"bad"} />
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

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {getTotal() != 0 ? getAverage() : "not available"}</p>
      <p>positive {getTotal() != 0 ? `${getPositive()}%` : "not available"}</p>
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