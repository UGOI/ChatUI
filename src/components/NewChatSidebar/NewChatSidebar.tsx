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

        {/* 
        Insert the rest of the conversations here. They should be sorted alphabetically.
        This can be done by sorting your contacts data before mapping it to Conversation components.
        */}
      </ConversationList>
    </Sidebar>
  );
}

export default NewChatSidebar;
