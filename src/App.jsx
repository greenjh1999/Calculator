import React,{ useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('0');
  const [result, setResult] = useState('')

const handleButtonClick = (value) => {
  setCount((prevcount) =>
  prevcount === '0' ? value: prevcount + value
  );
};

const handleAddition = () => {
  setCount((prevCount) => prevCount + '+');
};

const handleSubtraction = () => {
  setCount((prevcount) => prevcount + '-');
}

const handleMultiplication = () =>{
  setCount((prevcount) => prevcount + '*');
}

const handleDivision = () => {
  setCount((prevcount) => prevcount + '/')
}

const handleEquals = () =>{
  try{
    const calculatedResults = eval(count);
    setCount(calculatedResults.toString());
  } catch (error) {
    setResult('Error');
  }
}


const handleClear = () =>{
  setCount('0')
  setResult('')
};





  return (
    <>
    <div className='Entire-Container'>
      <div className='Output-box'>
      <p className='Counter'>{count}</p>
      </div>
      <div className='Button-Container'>
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('0')}className='Centered'>0</button>
      <button onClick={handleEquals} className='equals'>=</button>
      <button onClick={handleAddition} className='add'>+</button>
      <button onClick={handleSubtraction} className='subtract'>-</button>
      <button onClick={handleDivision}className='divided'>/</button>
      <button onClick={ handleClear} className='Clear'>C</button>
      <button onClick={handleMultiplication}>*</button>

      </div>
      </div>
    </>
  )
}

export default App
