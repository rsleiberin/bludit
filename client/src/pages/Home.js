import { useState, useEffect, createContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'


import Header from '../components/Header'
import PostFilters from '../components/PostFilters'
import CommunitiesForYou from '../components/CommunitiesForYou'
import PostPreview from '../components/PostPreview'

function Home({ currentUser, setUser }) {

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('/posts').then(r => r.json()).then(setPosts)
  }, [])
  


  return (
      <div className='test' >
        <Header currentUser={currentUser} setUser={setUser}/>
        <Outlet />
        <div className=''>
        <PostFilters />
        <CommunitiesForYou />
        <>{posts.map((post) => {return(
          <PostPreview post={post}/>
        )})}</>
        </div>
      </div>
  )
}

export default Home