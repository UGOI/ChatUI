// NewChatSidebar.tsx
import React from 'react';
import { Sidebar, ConversationList, Conversation, Avatar, Search } from "@chatscope/chat-ui-kit-react";
import GroupLogo from '../../assets/group.svg'; // import your group logo here
import NewChatSidebarHeader from '../NewChatSidebarHeader/NewChatSidebarHeader';
import './NewChatSidebar.css';

interface NewChatSidebarProps {
  onBack: () => void;
}

const NewChatSidebar: React.FC<NewChatSidebarProps> = ({ onBack }) => {
  return (
    <Sidebar position="left" scrollable>
      <NewChatSidebarHeader onBack={onBack} />

      <Search placeholder="Search contacts..."/>

      <Conversation name="New Group" onClick={() => {/* Handle new group creation here */}}>
        <Avatar src={GroupLogo} name="Group" />
      </Conversation>

      <h3>Friends</h3>

      <ConversationList>
        <Conversation name="ClientName (YOU)">
          <Avatar src="https://placekitten.com/50/52" name="You"/>
        </Conversation>
        <Conversation name="Friend 1">
          <Avatar src="https://placekitten.com/50/53" name="Friend 1"/>
        </Conversation>
        <Conversation name="Friend 2">
          <Avatar src="https://placekitten.com/50/54" name="Friend 2"/>
        </Conversation>
      </ConversationList>

      <h3>ChatGPT</h3>

      <ConversationList>
        <Conversation name="Chat with ChatGPT" onClick={() => {/* Handle new chat with ChatGPT here */}}>
          <Avatar src="https://placekitten.com/50/59" name="ChatGPT"/> {/* Replace with your preferred avatar */}
        </Conversation>
      </ConversationList>
    </Sidebar>
  );
}

export default NewChatSidebar;
