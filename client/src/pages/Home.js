import { createContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import PostFilters from '../components/PostFilters'
import CommunitiesForYou from '../components/CommunitiesForYou'
import PostPreview from '../components/PostPreview'

function Home({currentUser}) {
  // const  = createContext('Default Value');

  return (
      <div className='test' >
        <Header currentUser={currentUser}/>
        <Outlet />
        <div className=''>
        <PostFilters />
        <CommunitiesForYou />
        <PostPreview />
        <PostPreview />
        </div>
      </div>
  )
}

export default Home