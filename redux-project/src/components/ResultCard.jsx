import React from 'react'

function ResultCard({ item }) {
  return (
    <div className=' justify-between bg-white h-65 w-62'>
      {item.type === 'photo' ? <img className='h-full w-full object-cover mb-0' src={item.src} alt="" /> : ''}
      {item.type === "video" ? (
        <video controls className="w-full h-full object-cover">
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img src={item.thumbnail} className="w-full h-full object-cover " />
      )}

    </div>
  )
}

export default ResultCard