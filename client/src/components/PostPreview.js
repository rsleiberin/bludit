import { useState } from "react"

export default function PostPreview({ post }) {

  console.log(post)



  return (
    <div className="Post flex bg-gray-100 w-96 m-4 rounded max-h-96 outline outline-1" >
      <div className="Sidebar p-1 bg-gray-200 float-left w-6">
        <button className="flex">^</button>
        <div className="">{Math.random()}</div>
        <button className="flex">V</button>
      </div>

      <div className="Main p-1">
        <div className="text-xs m-1" >{post.category.title} Posted by: u/{post.user.username} </div>
        <div className="TITLE text-sm m-1">{post.title}</div>
        <div className="CONTENT m-1">{post.content}</div>
        {/* <img className="place-self-end p-1" alt={post.pictureDesc} width="200" src={post.pictureSrc}/> */}
        {/* <div className="CONTENT">txt bble {post.commentCount} Comments</div> */}
      </div>
    </div>
  )
}