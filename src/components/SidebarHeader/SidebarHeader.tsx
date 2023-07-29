// SidebarHeader.tsx
import React from 'react';
import { ConversationHeader, Avatar } from "@chatscope/chat-ui-kit-react";
import { getEditIcon } from '../utils/icons';
import { User } from '@chatscope/use-chat';


interface SidebarHeaderProps {
    onNewChat: () => void;
    user: User;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onNewChat, user }) => {
  const EditIcon = getEditIcon();
  const avatarSrc = user.avatar;

  return (
    <ConversationHeader>
        <Avatar src={avatarSrc} name="Me" />
        <ConversationHeader.Content userName="Chats" />
        <ConversationHeader.Actions>
            <button onClick={onNewChat} className="new-chat-button">
                <img src={EditIcon} alt="Edit" /> {/* use your icon here */}
            </button>
        </ConversationHeader.Actions>
    </ConversationHeader>
  );
}

export default SidebarHeader;
