import {useEffect, useState} from 'react';
import Conversations from '../components/Conversations';

const userGetConversations = () => {
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        const useGetConversations = async () => {
            setLoading(true);
            try{
                const res = await fetch('/api/users');
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversations(data);
            }catch(error){
                Toast.error(error.messages);
            }finally{
                setLoading(false);
            }
        }

        useGetConversations();
    }, []);

    return {loading, Conversations};
}

export default userGetConversations