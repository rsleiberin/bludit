import { useState, useEffect } from "react"
import Header from "../components/Header"
import { Navigate, useNavigate } from "react-router-dom"

export default function NewPost({currentUser, setUser, setPostObject}) {
    const initialFormState = {community: null , title: "", content: "" }
    const [categories, setCategories] = useState([])
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
        fetch( '/posts',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                category_id: parseInt(formState.community),
                title: formState.title,
                content: formState.content
            }),
        }).then((r) => r.json()).then((data) => {
            setPostObject(data)
            navigate('/posts')
        })
    }

    useEffect(() => {
        fetch('/categories').then(r => r.json()).then(data => {
            formState.community = data[0].id
            setCategories(data)
            })
    }, [])

  return (
      <>
      <Header currentUser={currentUser} setUser={setUser}/>
    <div className="w-96 h-96 bg-gray-100 m-4 outline-1 justify-content-center">
        <div>Create a post</div>
        <form className=" h-64">
            <div>
                <select className="COMMUNITY SELECTOR rounded outline outline-1 p-1 m-2"
                name='community'
                onChange={inputHandler}
                > {categories.map(category => {return (<option value={category.id}>{category.title}</option>)})}
                </select>
            </div>
            <div className="TITLE/CONTENT CONTAINER w-80 m-4 rounded p-1 outline-1 m-2 place-content">
                <input
                className="TITLE w-80 m-1 outline rounded outline-1" 
                name="title"
                placeholder=" Title"
                value={formState.title}
                onChange={inputHandler}
                />

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