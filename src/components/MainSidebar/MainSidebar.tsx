// MainSidebar.tsx
import React, { useState } from 'react';
import NewChatSidebar from '../NewChatSidebar/NewChatSidebar';
import Sidebar from '../Sidebar/Sidebar';

const MainSidebar: React.FC = () => {
  const [newChat, setNewChat] = useState(false);

  return (
    newChat 
      ? <NewChatSidebar onBack={() => setNewChat(false)} /> 
      : <Sidebar onNewChat={() => setNewChat(true)} />
  );
}

export default MainSidebar;
