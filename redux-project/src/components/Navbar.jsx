import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-blue-400 flex justify-between py-5 px-5 items-center'>
            <h1 className='text-2xl font-bold'>Media Search</h1>
            <div className='flex gap-20 px-20'>
                <Link className='bg-green-600 py-2 px-4 rounded text-lg active:scale-95' to='/'>Search</Link>
                <Link className='bg-green-600 py-2 px-4 rounded text-lg active:scale-95' to='/collection'>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar