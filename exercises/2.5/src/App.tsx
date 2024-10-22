import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface titleProps {
  title: string;
  titleMaster: string;
}

const Title = ({ title, titleMaster }: titleProps) => {
  const [count, setCount] = useState(1);
  const [change, setChange] = useState(false);

  const ClickCounter = () => {
    setCount(count + 1);
    console.log("count : ", count);
    if(count >= 9) {
      setChange(true);
    }
  }

  return (
    <h1 onClick = {ClickCounter}>{change ? titleMaster: title }</h1>
  )
}

function App() {
  const [count, setCount] = useState(0);

  const ClickCounter = () => {
    console.log("before click : ", count);
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <Title title="Click it" titleMaster="You are a master in the art of clicking !" />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ClickCounter}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
