import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning React</h1>
      <h4>by Rusty Fausak</h4>
      <div className="content">
        <ul>
          <li>
            <a href="part1.html">Part 1 - Basic Page Layout</a>
            <div className="desc">The very basics</div>
          </li>
          <li>
            <a href="part2.html">Part 2 - Travel Journal</a>
            <div className="desc">A list of travel locations with images and descriptions.</div>
          </li>
          <li>
            <a href="part3.html">Part 3 - Robot Chef</a>
            <div className="desc">Give the chef a list of ingredients and it will suggest a recipe.</div>
          </li>
          <li>
            <a href="part4.html">Part 4 - Meme Generator</a>
            <div className="desc">Add top and bottom text to a random meme image.</div>
          </li>
          <li>
            <a href="part5-tenzies.html">Part 5 - Tenzies</a>
            <div className="desc">Roll dice until they are all the same.</div>
          </li>
          <li>
            <a href="part6-pipes.html">Part 6 - Pipes</a>
            <div className="desc">Connect the flow.</div>
          </li>
        </ul>
      </div>
      <div className="footer">
        &copy; 2025 by Rusty Fausak
        <br />Built with Vite + React.
        <br />Many sections from the React course on Scrimba.
      </div>
    </>
  )
}

export default App
