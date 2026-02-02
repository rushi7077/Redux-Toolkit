import { useDispatch, useSelector } from "react-redux"; 
import {fetchVideos,fetchPhotos} from '../api/mediaApi';
import {setQuery,setLoading,setResult,setError} from '../redux/features/searchSlice'
import { useEffect } from "react";

const ResultGrid = () => {
  const {activeTab,query,result,loading,error} =useSelector((store)=>store.search)

  const dispatch  = useDispatch()

  useEffect(() => {
    try{
        const getData = async () => {


      let data;

      if (activeTab === "Photos") {
        if(!query) return
        let res = await fetchPhotos(query);
        data=res.results.map((items)=>(
            {
                id:items.id,
                title:items.alt_description,
                type:'photo',
                thumbnail:items.urls.small,
                src:items.urls.full
            }))
      }
      if(activeTab === "Videos"){
        let res = await fetchVideos(query,10);
        data=res.videos.map((items=>(
            {
                id:items.id,
                name:items.user.name || 'video',
                type:'video',
                thumbnail:items.image,
                src:items.video_files[0].link
            }
        )))
      }

    };
    }
    catch(err){
        useDispatch(setError(err))
    }

    getData();
    dispatch(setResult(data))
  }, [query, activeTab]);

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>
 
  return <div>{result.map((item)=>{
    item.title
  })}</div>;
};

export default ResultGrid;
