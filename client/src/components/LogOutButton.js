import { useNavigate } from "react-router-dom"

export default function LogOutButton({setUser}) {
    const navigate = useNavigate()

    const deleteSession = () => {
        fetch( `/sessions` ,{
            method: 'DELETE'
        }).then(setUser(""))
    }

    const logOutHandler =() => {
        deleteSession()
        navigate('/')
    }

    return (
        <div className='float-right text-blue-800 bg-white rounded outline outline-2 p-1'>
      <button  className="flex" onClick={logOutHandler}>Log Out</button>
        </div>
    )
}