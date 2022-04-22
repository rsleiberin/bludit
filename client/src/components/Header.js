import { Navigate, useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
import LogOutButton from './LogOutButton';
import CreatePost from './CreatePost';

function Header({currentUser, setUser}) {
  const navigate = useNavigate();
  const clickRHandler = () => {
    navigate("/")
  }
  const isLoggedIn = currentUser
  if (!isLoggedIn) {
    return (
      <div className='flex p-2 w-full bg-blue-600 justify-between'>
        <button className='border border-4 w-8 text-white font-extrabold' onClick={clickRHandler}> R </button>
        <SearchBar />
        <> <SignUpButton /> <LogInButton /> </>
      </div>
  )
  } else {
    return (
      <div className='flex p-2 w-full bg-blue-600 justify-between'>
        <button className='border border-4 w-8 text-white text-xl' onClick={clickRHandler}> R </button>
        <SearchBar />
        <> <CreatePost /> <LogOutButton setUser={setUser}/> </>
      </div>
    )
  }
}

export default Header