// MainSidebar.tsx
import React, { useState } from 'react';
import NewChatSidebar from '../NewChatSidebar/NewChatSidebar';
import Sidebar from '../Sidebar/Sidebar';
import {
  User
} from "@chatscope/use-chat";


interface MainSidebarProps {
  user: User;
  activeConversation: any;
  setActiveConversation: (conversationId: string) => void;
  conversations: any;
  getUser: (id: string) => any;


}

const MainSidebar: React.FC<MainSidebarProps> = ({user, activeConversation, setActiveConversation, conversations, getUser}) => {
  const [newChat, setNewChat] = useState(false);


  return (
    newChat 
      ? <NewChatSidebar onBack={() => setNewChat(false)} /> 
      : <Sidebar onNewChat={() => setNewChat(true)} user={user} activeConversation={activeConversation} setActiveConversation={setActiveConversation} conversations={conversations} getUser={getUser}/>
  );
}

export default MainSidebar;
