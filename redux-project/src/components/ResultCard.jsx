import React from 'react'

function ResultCard({ item }) {
  return (
    <div className=' bg-white h-65 w-62 overflow-auto'>
      {item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
      {item.type === "video" ? (
        <video muted controls className="w-full h-full object-cover">
          <source src={item.src} type="video/mp4" />
        </video>
      ) : ('')}

    </div>
  )
}

export default ResultCard