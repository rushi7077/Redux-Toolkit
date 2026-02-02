import React from 'react'
import SearchBar from './components/SearchBar'
import Tab from './components/Tab'
import ResultGrid from './components/ResultGrid'

function App() {
  return (
    <div className='bg-gray-600 h-screen'>
      <SearchBar/>
      <Tab/>
      <ResultGrid/>
    </div>
  )
}

export default App