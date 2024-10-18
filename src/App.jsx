import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counters from './counter'
import Teacher from './student'


import User from './user'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button 2 clicked');
  }
  function handleClick3(){
    alert('button 3 clicked');
  }
  function handleClick4(){
    alert('button 4 clicked');
  }
  function handleClick5(){
    alert('button  5 clicked');
  }


  return (
    <>

      <h1>39  React Module</h1>
 {/* <Users></Users> */}
 {/* <Friends></Friends> */}

 <User></User>
<Teacher></Teacher>
      <Counters></Counters>
      <button onClick={handleClick}>Click 1 </button>
      <button onClick={handleClick2}>Click 2 </button>
      <button onClick={handleClick3}>Click 3 </button>
      <button onClick={handleClick4}>Click 4 </button>
      <button onClick={() => handleClick5 (3)}>Click 5 </button>

    
    </>
  )
}

export default App
