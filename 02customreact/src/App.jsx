import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// let counter = 5



function App() {
  const addValue = () => {
    if(counter<20)
      {
        // counter = counter + 1
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        //still the value will only increase by 1.all the setcounters increase the same counter
        // by 1. so if we write setCounter(counter => counter+1) in all then we
        // can get increase in all.
        return setCounter
      }
      else{
        alert('the value cant go above 20')
      }
  }
  const removeValue = () => {
    if(counter>0)
      {
        counter = counter - 1
        setCounter(counter)
        return setCounter
      } 
      else{
        alert('the value cant go below 0')
      }
  }
  let [counter, setCounter] = useState(5)

  return (
    <>
      <h1>counter value:{counter}</h1>
      <button
        onClick={addValue}>Add value:{counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove value:{counter}</button>
    </>
  )
}

export default App
