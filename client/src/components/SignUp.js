import {useState} from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
    const [uesrname, setUesrname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate();
    function handleClickX() {
        navigate("/")
    }

  return (
    <div className="w-1/5 min-w-min m-3 flex rounded outline outline-1 absolute left-1/2 -translate-x-1/2 bg-white drop-shadow-xl">
        <div className="w-32 bg-blue-700"></div>
        <div className="w-96 p-4">
        <button onClick={handleClickX} className="float-right">X</button>
            <div className="p-3 bg-white w-64 rounded">
                <p className="text-xl text-blue-700 ">Sign up</p>
                <p>By continuing, you are setting up a bludit account and agree to our User Agreement and Privacy Policy</p>
            </div>
            <div className=" mt-11 ">
                <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow" type="text" placeholder=" Email" />
                <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow" type="text" placeholder=" Password" />
                <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow" type="text" placeholder=" Confirm Password" />
                <button className="rounded-xl mt-4 m-1 bg-blue-700 text-white p-1 text-lg w-48">Continue</button>
            </div>
        </div>
    </div>
  )
}

