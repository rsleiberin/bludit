import { useNavigate } from "react-router-dom"

export default function LogInButton() {
  const navigate = useNavigate()
  function navigateLogin() {
    navigate('/login')
  }
  return (
      <div className='flex float-right text-blue-700 bg-white rounded outline outline-1 p-1 h-6 align-baseline'>
    <button onClick={navigateLogin} className="flex">Log In</button>
      </div>
  )
}