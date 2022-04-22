import { Navigate, useNavigate } from "react-router-dom"

export default function CreatePost() {
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate('/submit')
    }
  return (
    <button className="outline outline-2 outline-blue text-blue-600 font-semibold rounded bg-white" onClick={onClick}>Create Post</button>
  )
}

