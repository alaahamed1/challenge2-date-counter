
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function handleReset(){
    setCount(0)
    setStep(1)
  }
  return (
    <>
      <div className='d-f'>
        <input type='range' min={0} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <span>Step: {step}</span>
      </div>


      <div className='d-f'>
        <button onClick={() => setCount((c) => c - step)} >&#45;</button>
        <input value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => setCount((c) => c + step)}>&#43;</button>  </div>

      {count === 0 ? (
        <p style={{ color: 'red' }}>Today is : {date.toLocaleDateString()}</p>
      ) : count < 0 ? (<p>{Math.abs(count)} days ago was  {date.toLocaleDateString()}</p>) : (<p> {count} days from today is {date.toLocaleDateString()}</p>)}
      {count !== 0 || step !== 1 ? (      <div>
        <button onClick={handleReset}>reset</button>
      </div>) : null}
    </>
  )
}

export default App;


