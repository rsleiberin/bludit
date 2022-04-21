import { useNavigate } from "react-router-dom"

export default function LogOutButton() {
    const navigate = useNavigate()

    const logOutHandler = () => {
        fetch( `/sessions` ,{
            method: 'DELETE'
        })
    }

    return (
        <div className='float-right text-blue-800 bg-white rounded outline outline-2 p-1'>
      <button  className="flex" onClick={logOutHandler}>Log Out</button>
        </div>
    )
}