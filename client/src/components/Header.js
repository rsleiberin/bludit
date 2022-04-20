import SearchBar from './SearchBar';
import LogInButton from './LogInButton';
import SignInButton from './SignInButton';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

function Header() {
  return (
      <div className='flex p-2 w-full bg-blue-600 justify-between'>
        <div className=''> R </div>
        <SearchBar />
        <>
            <LogInButton />
            <SignInButton />
        </>
      </div>
  )
}

export default Header