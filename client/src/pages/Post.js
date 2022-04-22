import { Navigate, useNavigate } from "react-router-dom"


export default function Post({currentUser, setUser, postObject}) {
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch( '/posts/'+ postObject.id, {
            method: 'DELETE'
        })
    }

    

    const callEditPage = () => {
        // console.log()
        navigate('/edit')
    }

    const deleteHandler = () => {
        console.log('clicked')
        handleDelete(postObject.id)
        navigate('/')
    }


    if(postObject){
    return (
        <div className="Post flex bg-gray-100 w-96 m-4 rounded max-h-96 outline outline-1" >
          <div className="Sidebar p-1 bg-gray-200 float-left w-6">
            <button className="flex">^</button>
            <div className="community">{postObject.title} <button className="p-1 outline"></button></div>
            <button className="flex">V</button>
          </div>

          <div className="Main p-1">
            <div className="text-xs" >{postObject.category.title} Posted by: u/{postObject.user.username}</div>
            <div className="text-sm" >{postObject.content}</div>
            <button className="outline p-1" onClick={deleteHandler}>Delete</button>
            <button className="outline p-1" onClick={callEditPage}>Edit</button>
          </div>
        </div>
      )
    }
}


