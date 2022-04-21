import { Navigate, useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar';
import LogInButton from './LogInButton';
import SignInButton from './SignUpButton';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

function Header() {
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