import { useState } from 'react'

export default function PostFilters() {
    const [activeFilter, setActiveFilter] = useState()

    const onClickHandler = (e) => {
        console.log(activeFilter)
        setActiveFilter(e.target.textContent)
    }

  return (
    <div className='flex items-center m-4 border-1 rounded border-black w-96 h-10 bg-gray-100 outline outline-1'>
    <button onClick={onClickHandler} className="p-1 h-5/6 ml-10 border-blue-600 border-2 rounded-md text-blue-600"> Hot </button>
    <button onClick={onClickHandler} className="p-1 h-5/6 ml-10 border-blue-600 border-2 rounded-md text-blue-600"> Newest </button>
    <button onClick={onClickHandler} className="p-1 h-5/6 ml-10 border-blue-600 border-2 rounded-md text-blue-600"> Top </button>
    </div>
  )
}
// <button onClick={onClickHandler}> Hot </button>