import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'


function App() {

  return (
    <div>
      <button onClick={async()=>{
        const data =await fetchPhotos('cat',1,20)
        console.log(data.results);
        
      }}>Get photo</button>
      <button onClick={async()=>{
        const data = await fetchVideos('tiger',10)
        console.log(data.videos);
        
      }}>Get video</button>
      
    </div>
  )
}

export default App