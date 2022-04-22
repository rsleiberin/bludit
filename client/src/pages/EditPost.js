import { useState, useEffect } from "react"
import Header from "../components/Header"
import { Navigate, useNavigate } from "react-router-dom"

export default function EditPost({setPostObject, currentUser, postObject}) {
    console.log(postObject)
    const initialFormState = postObject ? {community: postObject.category.id , title: postObject.title, content: postObject.content } : null
    const [formState, setFormState] = useState(initialFormState)
    
    const navigate = useNavigate()

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormState(formState => ({...formState, [name]: value}))
        console.log(formState)
    };

    const submitHandler = (e) => {
        e.preventDefault()
        postNewForm()
    };

    const postNewForm = () => {
        console.log(formState)
        fetch( '/posts/'+postObject.id,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: postObject.id,
                content: formState.content
            }),
        }).then((r) => r.json()).then((data) => {
            setPostObject(data)
            navigate('/posts')
        })
    }

    if(postObject){
  return (
      <>
      <Header currentUser={currentUser} />
    <div className="w-96 h-96 bg-gray-100 m-4 outline-1 justify-content-center">
        <form className=" h-64">
            <div className="TITLE/CONTENT CONTAINER w-80 m-4 rounded p-1 outline-1 m-2 place-content">
                <textarea
                className="CONTENT w-80 m-1  h-64 outline outline-1 bg-white"
                name="content"
                value={formState.content}
                onChange={inputHandler}
                />

                <button className="outline p-3" onClick={submitHandler}/>
            </div>
        </form>
    </div>
      </>
  )
}

}