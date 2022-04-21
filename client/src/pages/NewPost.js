import { useState } from "react"
import Header from "../components/Header"

export default function NewPost() {
    const initialFormState = {category: "Select A Category", title: "", content: "" }
    const [formState, setFormState] = useState(initialFormState)
  return (
      <>
      <Header />
    <div className="w-96 bg-gray-100 m-4 outline-1 justify-content-center">
        <div>Create a post</div>
        <form className=" h-64">
            <div>
                <select className="rounded outline outline-1 p-1 m-2">
                    <option>Choose A Community</option>
                    <option>Rocks </option>
                </select>
            </div>
            <div className="Container w-80 m-4 rounded p-1 outline-1 m-2 place-content">
                <input className="Title w-80 m-1 outline rounded outline-1" placeholder=" Title"/>
                {/* <div>B i link</div> */}
                <div className="Content w-80 m-1  outline outline-1 bg-blue-200" contenteditable="true"></div>
            </div>
        </form>
    </div>
      </>
  )
}