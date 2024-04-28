import { CiLogout } from "react-icons/ci";
import userLogout from "../hooks/userLogout";

const LogoutButton = () => {

  const {loading, logout} = userLogout();

  return (
    <div className='mt-auto'>
      {!loading ? (
        <CiLogout className='w-6 h-6 text-white cursor-pointer' onclick={logout}/>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      
    </div>
  )
}

export default LogoutButton
