import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import Navbar from '../components/Navbar'
import { clearCollection } from '../redux/features/collectionSlice'

function CollectionPage() {
    const collection = useSelector(state => state.collection.items)
    const dispatch = useDispatch();
    return (
        <div >
            <Navbar />
            {collection.length>0?<div className='mt-21 bg-green-600 flex justify-between '>
                <h2 className='font-bold text-xl p-4 pl-15 '>Collection</h2>
                <button onClick={() => {
                    dispatch(clearCollection())
                }} className='bg-blue-500 px-4 py-2 text-lg font-semibold active:scale-95'>Clear Store</button>

            </div>:<h2 className='mt-21 bg-green-600 p-4 text-xl font-bold flex justify-center'>Collection is Empty</h2>}
            <div className="flex flex-wrap gap-10 px-10 pt-10">
                
                {collection.map((item, idx) => {
                    return <div key={idx}>

                        <CollectionCard item={item} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default CollectionPage