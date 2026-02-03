import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice";

function Tab() {

    const tab = ['Photos','Videos']

    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className="flex gap-10 p-5 justify-center">
        {tab.map((ele,idx)=>{
            return (
            <button className={`${activeTab==ele? 'bg-green-700':'bg-blue-400 '}  transition px-4 py-2 rounded text-xl cursor-pointer active:scale-95`}
            key={idx}
            onClick={()=>{
                dispatch(setActiveTab(ele))
            }}
            >{ele}</button>)
        })}
    </div>
  )
}

export default Tab