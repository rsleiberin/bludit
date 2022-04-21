import { Navigate, useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar';
import LogInButton from './LogInButton';
import SignInButton from './SignUpButton';

function Header({currentUser}) {

  console.log(currentUser)
  const navigate = useNavigate();
  const clickRHandler = () => {
    navigate("/")
  }
  return (
      <div className='flex p-2 w-full bg-blue-600 justify-between'>
        <button className='border border-4 w-8 text-white text-xl' onClick={clickRHandler}> R </button>
        <SearchBar />
              <>
              <LogInButton />
              <SignInButton />
              </>
      </div>
  )
}

export default Header