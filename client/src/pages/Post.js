import { Navigate, useNavigate } from "react-router-dom"
import Header from "../components/Header";


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

    const favoriteHandler = () => {
      console.log(currentUser.id, postObject.id)
      fetch('/subscriptions', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          user_id: parseInt(currentUser.id),
          post_id: parseInt(postObject.id)
      })})
      .then(r => r.json())
      .then(console.log)}

    if(postObject){
    return (
      <>
      <Header currentUser={currentUser} setUser={setUser}/>
        <div className="Post flex bg-gray-100 w-96 m-4 rounded max-h-96 outline outline-1" >
          <div className="Sidebar p-1 bg-gray-200 float-left w-6">
            <button className="flex">^</button>
            <div className="community">{postObject.title} <button className="p-1 outline" onClick={favoriteHandler}>F</button></div>
            <button className="flex">V</button>
          </div>

          <div className="Main p-1">
            <div className="text-xs" >{postObject.category.title} Posted by: u/{postObject.user.username}</div>
            <div className="text-sm" >{postObject.content}</div>
            <button className="outline p-1" onClick={deleteHandler}>Delete</button>
            <button className="outline p-1" onClick={callEditPage}>Edit</button>
          </div>
        </div>
      </>
      )
    }
}


