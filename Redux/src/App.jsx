import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Dec, Inc } from './Action'

function App() {

  let Dispatch = useDispatch();
  let count = useSelector((state) => state)

  return (
    <>
    <h1>{count}</h1>
      <button onClick={() => Dispatch(Inc())}>Increment</button>
      <button onClick={() => Dispatch(Dec())}>Decrement</button>
    </>
  )
}

export default App
