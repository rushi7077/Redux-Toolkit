import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementBy, increment, incrementBy } from './redux/features/counterSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  const [num, setNum] = useState()

  return (
    <div className='h-screen w-full bg-fuchsia-400 flex flex-col justify-center items-center gap-10'>
      <h1 className='text-9xl font-bold'>{count}</h1>
      <div className='gap-3.5 flex'>
        <button onClick={()=>{
          dispatch(increment())
        }}
        className='bg-green-500 py-2 px-5 rounded text-2xl font-bold'>Increment</button>
        <button onClick={()=>{
          if(count>=1)
            dispatch(decrement())
        }}
        className='bg-red-500 py-2 px-5 rounded text-2xl font-bold'>Decrement</button>
      </div>
      <div className='flex gap-3.5'>
        <input className='bg-amber-300'
        type="number" 
        value={num}
        onChange={(e)=>{
          setNum(e.target.value)
        }}/>
        <button onClick={()=>{
          dispatch(incrementBy(Number(num)))
        }}
        className='bg-violet-500 py-2 px-5 rounded text-2xl font-bold'>IncrementByAmount</button>

        <button onClick={()=>{
          if(count>num)
            dispatch(decrementBy(Number(num)))
        }}
        className='bg-violet-500 py-2 px-5 rounded text-2xl font-bold'>DecrementByAmount</button>

      </div>
    </div>
  )
}

export default App