import { useState } from 'react';


const userLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  
  const login = async (username, password) => {

    const success = handleInputsErrors({username, password})
    if(!success) return;

    setLoading(true);
    try{
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: JSON.stringify({ username, password})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);

    }catch(error){
        Toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }

  return {loading, login};

}

export default userLogin


function handleInputsErrors({username, password}){
    if(!username || !password){
        toast.error('Please fill in all fields!')
        return false
    }

    return true
}

