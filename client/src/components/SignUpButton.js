import { useNavigate } from "react-router-dom"

export default function SignInButton() {
  const navigate = useNavigate()
  function navigateSignup() {
    navigate('/signup')
  }

  return (
      <div className='flex float-right mr-16 outline outline-2 outline-white text-white rounded p-1 '>
    <button onClick={navigateSignup}> Sign Up </button>
      </div>
  )
}