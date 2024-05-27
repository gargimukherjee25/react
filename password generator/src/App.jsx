import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useref hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*[]{}+=_-~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, character, setPassword]) //if there is any change in dependencies the function will be again run.

  const copypassword = useCallback(() => {
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0, 3); to selectively select a portion
    //copy to clipboard**
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => { passwordGenerator() }, [length, character, number, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
      text-blue-800 bg-gray-800'>
        <h1 className='text-white text-center mb-4'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full
          py-1 px-3' placeholder='password' readOnly
            ref={passwordref}
          />
          <button
            onClick={copypassword}
            className='outline-none bg-blue-700 text-white px-3 py-0.5
          shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100}
              value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-white'>Length : {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={(e) => {
                setNumber((prev) => !prev);
              }}
            />
            <label className='text-white'>Number </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={(e) => {
                setCharacter((prev) => !prev); //it takes access of previous value and the not changes it to the opposite value.
              }}
            />
            <label className='text-white'>Character </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
