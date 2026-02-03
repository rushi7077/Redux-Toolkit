import SearchBar from '../components/SearchBar'
import Tab from '../components/Tab'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'


function HomePage() {
    const { query } = useSelector((store) => store.search)
    return (
        <div>

            <Navbar/>            
            < SearchBar />
            {query != '' ? <div>
                <Tab />
                <ResultGrid />
            </div> : ''}
        </div>
    )
}

export default HomePage