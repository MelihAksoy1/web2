import { useState } from 'react'


interface titleProps {
    title: string;
    titleMaster?: string;
    messageOnMouse?: string;
  }
  
  const Click = ({ title, titleMaster = "You are a master in the art of clicking !", messageOnMouse = "tzst" }: titleProps) => {
    const [countM, setCountM] = useState(0);
    const [change, setChange] = useState(false);
  
    const TitleMaster = () => {
      setCountM(countM + 1);
      console.log("count : ", countM);
      if(countM >= 9) {
        setChange(true);
      }
    }

    const [count, setCount] = useState(0);
    const [onButtonClick, setOnButtonClick] = useState(false);
    const ClickCounter = () => {
      console.log("before click : ", count);
      setCount(count + 1);
    }
  
    const onButton = () => {
      setOnButtonClick(true);
    }
  
    const offbutton = () => {
      setOnButtonClick(false);
    }

  
    return (
      <div>
      <h1 >{title}</h1>
      <div className="card">
        {onButtonClick ? <p>Please click on me now !</p> : null}
        <button onClick={ClickCounter} onMouseEnter={onButton} onMouseLeave={offbutton} >
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      </div>
    )
  }

export default Click;