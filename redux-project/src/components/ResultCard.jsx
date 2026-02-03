import React from 'react'

const clickHandler=(item)=>{

  const oldData = JSON.parse(localStorage.getItem('Collection')) || []
  const newData = [...oldData,item]
  localStorage.setItem('Collection',JSON.stringify(newData))
  
}

function ResultCard({ item }) {
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
      <button onClick={()=>{
        clickHandler(item)
      }} className='py-1 active:scale-95 cursor-pointer px-4 rounded font-bold ml-5 absolute bottom-0 bg-blue-500'>Save</button>

    </div>
  )
}

export default ResultCard