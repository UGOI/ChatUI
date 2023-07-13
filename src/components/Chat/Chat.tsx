// Chat.tsx
import React from 'react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer } from "@chatscope/chat-ui-kit-react";
import MainSidebar from '../MainSidebar/MainSidebar';
import ChatContainerComponent from '../ChatContainerComponent/ChatContainerComponent';
import './Chat.css';

function Chat() {
  return (
    <div className="chatContainer">
      <MainContainer>
        <MainSidebar />
        <ChatContainerComponent />
      </MainContainer>
    </div>
  );
}

export default Chat;
