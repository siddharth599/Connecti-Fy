import {create} from 'zustand';

const useConversation = create((Set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({messages}),
}))

export default useConversation;