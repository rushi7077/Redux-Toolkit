import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, fetchPhotos } from '../api/mediaApi';
import { setQuery, setLoading, setResult, setError } from '../redux/features/searchSlice'
import { useEffect } from "react";

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
          let res = await fetchPhotos(query,5,20);
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
          let res = await fetchVideos(query, 10);
          data = res.videos.map((items) => (
            {
              id: items.id,
              title: items.user.name,
              type: 'video',
              thumbnail: items.image,
              src: items.url
            }
          ))
        }
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
    <div>
      {result.map((item,idx)=>{
        return <div key={idx}>{item.title}</div>
      })}
    </div>
  )
};

export default ResultGrid;
