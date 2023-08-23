import React, {useState} from 'react'
import './index.css';

function App() {
  const [count , setCount] = useState(0);

  const HandleINC = ()=>{
    setCount(count + 1)
  }

  const HandleDEC = ()=>{
    setCount(count - 1)
  }
  return (
    <div className="container">
      <div className="box">
        <h1>{count}</h1>
      </div>
      <br />
      <div className="div">
      <button onClick={HandleINC} className='Add'>Increase</button>
      <button onClick={HandleDEC} className='Minus'>Decrease</button>
      </div>
    </div>
  )
}

export default App