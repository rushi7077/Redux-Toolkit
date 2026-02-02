import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, fetchPhotos } from '../api/mediaApi';
import { setLoading, setResult, setError } from '../redux/features/searchSlice'
import { useEffect } from "react";
import ResultCard from './ResultCard'


const ResultGrid = () => {
  const { activeTab, query, result, loading, error } = useSelector((store) => store.search)

  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      try {

        dispatch(setLoading())
        let data;
        if (!query) return

        if (activeTab === "Photos") {
          let res = await fetchPhotos(query);
          data = res.results.map((items) => (
            {
              id: items.id,
              title: items.alt_description,
              type: 'photo',
              thumbnail: items.urls.small,
              src: items.urls.full
            }))
        }
        if (activeTab === "Videos") {
          let res = await fetchVideos(query);
          data = res.videos.map((items) => (
            {
              id: items.id,
              title: items.user.name,
              type: 'video',
              thumbnail: items.image,
              src: items.video_files[0].link
            }
          ))
        }
        console.log(data);
        
        dispatch(setResult(data))

      } catch (error) {
        dispatch(setError(error.message))

      }

    }
    getData();
  }, [query, activeTab,dispatch]);

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>

  return (
    <div className="flex flex-wrap overflow-auto gap-10 justify-between mx-10">
      {result.map((item,idx)=>{
        return <div key={idx}>
          <ResultCard item={item}/>
        </div>
      })}
    </div>
  )
};

export default ResultGrid;
