import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>💫リアクト中級編、よろしくお願いします💫</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
           <code> react-exp-02-ri5uf0uyn-hizza710s-projects.vercel.app　</code> 
        </p>
      </div>
      <p className="read-the-docs">
        やっと初級編の理解ができました　よろしくお願いいたします！
      </p>
    </>
  )
}

export default App
