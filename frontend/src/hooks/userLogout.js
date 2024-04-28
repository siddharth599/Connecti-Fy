
import { useState } from 'react';

const userLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

  const logout = async () => {
    try{
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {"Content-type": "application/json"}
        });

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem("chat-user")
        setAuthUser(null);
    }catch(error){
        Toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }

  return {loading, logout};

};

export default userLogout
