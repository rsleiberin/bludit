import { Navigate, useNavigate } from "react-router-dom"

export default function CreatePost() {
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate('/submit')
    }
  return (
    <button >Create Post</button>
  )
}

