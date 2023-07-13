// NewChatSidebarHeader.tsx
import React from 'react';
import { ConversationHeader } from "@chatscope/chat-ui-kit-react";

interface NewChatSidebarHeaderProps {
  onBack: () => void;
}

const NewChatSidebarHeader: React.FC<NewChatSidebarHeaderProps> = ({ onBack }) => {
  return (
    <ConversationHeader className="new-chat-header">
      <ConversationHeader.Back onClick={onBack}/>
      <ConversationHeader.Content userName="New Chat" />
    </ConversationHeader>
  );
}

export default NewChatSidebarHeader;
