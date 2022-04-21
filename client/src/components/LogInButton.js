import { useNavigate } from "react-router-dom"

export default function LogInButton() {
  const navigate = useNavigate()
  function navigateLogin() {
    navigate('/login')
  }
  return (
      <div className='float-right text-blue-800 bg-white rounded outline outline-2 p-1'>
    <button onClick={navigateLogin} className="flex">Log In</button>
      </div>
  )
}