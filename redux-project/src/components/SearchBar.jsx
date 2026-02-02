import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

function SearchBar() {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
        
    }
    

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }} className='p-10 bg-green-700 flex gap-10'>

            <input required onChange={(e)=>{
            setText(e.target.value)
            }}
            value={text}
            className='w-full px-5 py-2 outline-none rounded border-2' type="text" placeholder='Enter Anything'/>

            <button className='px-5 py-2 cursor-pointer active:scale-95  outline-none rounded border-2 '>Search</button>
        </form>
    </div>
  )
}

export default SearchBar