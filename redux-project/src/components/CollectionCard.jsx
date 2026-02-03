import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection } from '../redux/features/collectionSlice';

function CollectionCard({item}) {
const dispatch = useDispatch();

  const clickHandler = (item) => {
    dispatch(removeCollection(item))
  }

  return (
    <div className=' bg-white h-65 w-62 relative overflow-auto'>
      <a target='_blank' className='h-full' href={item.url}>
        {item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
        {item.type === "video" ? (
          <video muted loop autoPlay className="w-full h-full object-cover">
            <source src={item.src} type="video/mp4" />
          </video>
        ) : ('')}
      </a>
      <button onClick={() => {
        clickHandler(item)
      }} className='py-1 active:scale-95 cursor-pointer px-4 rounded font-bold ml-5 absolute bottom-0 bg-blue-500'>Remove</button>

    </div>
  )
}

export default CollectionCard