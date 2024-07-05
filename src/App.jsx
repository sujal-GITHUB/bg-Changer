import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }

  const st = color.toUpperCase;

  return (
    <div className='w-full h-screen duration-200 flex flex-wrap justify-center align-bottom font-bold ' style={{backgroundColor: color}}>
      I am {color} 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'green'}}
          >Green</button>
          <button
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'blue'}}
          >Blue</button>
          <button
          onClick={() => setColor('pink')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'pink'}}
          >Pink</button>
          <button
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'yellow'}}
          >Yellow</button>
          <button
          onClick={() => setColor('cyan')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'cyan'}}
          >Cyan</button>
          <button
          onClick={() => setColor('grey')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'grey'}}
          >Grey</button>
          
          </div>
      </div>
    </div>
  )
}

export default App