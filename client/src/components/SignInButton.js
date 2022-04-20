import { useNavigate } from "react-router-dom"

export default function SignInButton() {
  const navigate = useNavigate()
  function navigateSignup() {
    navigate('/signup')
  }

  return (
      <div className='flex float-right'>
    <button onClick={navigateSignup}> Sign Up </button>
      </div>
  )
}