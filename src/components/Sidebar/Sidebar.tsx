// ChatSidebar.tsx
import React from 'react';
import { Sidebar, ConversationList, Conversation, Avatar } from "@chatscope/chat-ui-kit-react";
import SidebarHeader from '../SidebarHeader/SidebarHeader'; // import SidebarHeader here
import './Sidebar.css';

interface ChatSidebarProps {
    onNewChat: () => void;
}

function ChatSidebar({ onNewChat }: ChatSidebarProps) {
  return (
    <Sidebar position="left" scrollable>
      <SidebarHeader onNewChat={onNewChat} />
      <ConversationList>
        <Conversation name="Group 1">
          <Avatar src="https://placekitten.com/50/50" name="User 1"/>
        </Conversation>
        <Conversation name="Group 2">
          <Avatar src="https://placekitten.com/50/50" name="User 2"/>
        </Conversation>
      </ConversationList>
    </Sidebar>
  );
}

export default ChatSidebar;
