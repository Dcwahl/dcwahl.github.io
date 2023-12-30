import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Home from './pages/Home'
import SketchPage from './pages/Sketches/SketchPage'
import './App.css'

function App() {
  return (
    <div>
      <div className="link flex float-right gap-2">
          <Link className='text-light-text' to="/">Home</Link>
          <Link className='text-light-text' to="/test">Other Things</Link>
          <Link className='text-light-text' to="/me">Resume</Link>
      </div>

      <div className="divider w-full"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<div>foo</div>} />
        <Route path="/sketches/:id" element={<SketchPage />} />
      </Routes>
    </div>    
  )
}

export default App


{/* <button 
onClick={() => setCount((count) => count + 1)}
className='btn'
>
count is {count}
</button>
      <details className="dropdown">
      <summary className="m-1 btn">open or close</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">Click</div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li className="dark:bg-dark-primary bg-light-primary"><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div> */}