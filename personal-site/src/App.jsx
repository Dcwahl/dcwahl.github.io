import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-defaultBackgroundColor'>
      <div >
        <p className="font-roboto text-8xl">Hi</p>

      </div>
    </div>
  )
}

export default App


{/* <h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
<h1 className="text-3xl font-bold underline">
  Hello world!
</h1> */}