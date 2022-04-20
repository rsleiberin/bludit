export default function PostPreview({ postData }) {

  let upvotes = 50
  let downvotes = 5

  const post = {
    creator: "kaleb",
    subBluedit: "b/thor",
    commentCount: 2,
    upvotecount: eval(upvotes - downvotes),
    timeSincePosted: "1 day",
    pictureSrc: "https://preview.redd.it/88812mjanau81.jpg?width=640&crop=smart&auto=webp&s=8c97ace6eceaf80f0997c082d896a0ca435303a3",
    pictureDesc: "Picture of thor holding his hammer"
  }



  return (
    <div className="Post flex bg-gray-100 w-96 m-4 rounded max-h-96 outline outline-1" >

      <div className="Sidebar p-1 bg-gray-200 float-left w-6">
        <button className="flex">^</button>
        <div className="">{post.upvotecount}</div>
        <button className="flex">V</button>
      </div>

      <div className="Main p-1">
        <div className="text-xs" >{post.subBluedit} Posted by: u/{post.creator} {post.timeSincePosted} ago </div>
        <div className="text-sm" >Offical Poster for 'Thor: Love and Thunder'</div>
        <img className="place-self-end p-1" alt={post.pictureDesc} width="200" src={post.pictureSrc}/>
        <div>txt bble {post.commentCount} Comments</div>
      </div>
    </div>
  )
}