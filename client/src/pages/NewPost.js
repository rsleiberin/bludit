

export default function NewPost() {
  return (
    <div className="w-96 m-4 outline outline-1">
        <div>Create a post</div>
        <form className="bg-blue-100 h-64">
            <div>
                <select className="rounded outline outline-1 p-1 m-2">
                    <option>Select A Community</option>
                    <option>Rocks </option>
                </select>
            </div>

            <div className="w-80 m-3 rounded outline outline-1 place-content">
                <input className="Title w-80 outline rounded outline-1" placeholder=" Title"/>
                {/* <div>B i link</div> */}
                <div className="Content w-80 outline outline-1 bg-blue-500 content-editable " contenteditable="true"/>
            </div>
        </form>
    </div>
  )
}