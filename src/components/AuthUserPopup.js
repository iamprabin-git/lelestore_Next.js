
import { logoutUser } from '@/redux/auth/authSlice';
import Link from 'next/link';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

function AuthUserPopup({user}) {
    const dispatch = useDispatch();
  return (
      <div className="absolute top-10 right-0 bg-white shadow-lg p-4">
        <h4 className="whitespace-nowrap font-medium text-lg">Hi!, {user.name || "User"}</h4>
        <Link href="/profile" className="items-center border rounded-lg px-2 py-1 hover:bg-slate-100 " onClick={() => setShowpopup(false)}>Profile</Link>
        
      <button
        onClick={() => dispatch(logoutUser())}
        className="bg-slate-700 py-1 px-4 text-white rounded flex items-center gap-2 mt-2"
      >
        
        <span onClick={() => setShowpopup(false)}>Logout</span>
        <RiLogoutBoxRLine />
      </button>
   
      </div>
  )
}

export default AuthUserPopup