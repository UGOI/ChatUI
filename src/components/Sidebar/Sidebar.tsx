// ChatSidebar.tsx
import React from 'react';
import { Sidebar, ConversationList, Conversation, Avatar } from "@chatscope/chat-ui-kit-react";
import SidebarHeader from '../SidebarHeader/SidebarHeader'; // import SidebarHeader here
import './Sidebar.css';
import { User, Conversation as ChatConversationModel} from '@chatscope/use-chat';


interface ChatSidebarProps {
    onNewChat: () => void;
    user: User;
    activeConversation: any;
    setActiveConversation: (conversationId: string) => void;
    conversations: any;
    getUser: (id: string) => any;


}

function ChatSidebar({ onNewChat, user, activeConversation, setActiveConversation, conversations, getUser }: ChatSidebarProps) {
  return (
    <Sidebar position="left" scrollable>
      <SidebarHeader onNewChat={onNewChat} user={user} />
      <ConversationList>
        { conversations.map((c: ChatConversationModel) => {
            // Helper for getting the data of the first participant
            const [avatar, name] = (() => {
              const participant = c.participants.length > 0 ? c.participants[1] : undefined;
              if (participant) {
                const user = getUser(participant.id);
                if (user) {
                  if (c.data.isDistinct) {
                    return [<Avatar src={user.avatar} />, user.username]; // assuming username is the name of the user
                  } else {
                    return [<Avatar src={user.avatar} />, c.data.roomName];
                  }
                }
              }
              return [undefined, undefined];
            })();
            

            return <Conversation key={c.id}
                          name={name}
                          info={c.draft ? `Draft: ${c.draft.replace(/<br>/g,"\n").replace(/&nbsp;/g, " ")}` : ``}
                          active={activeConversation?.id === c.id}
                          unreadCnt={c.unreadCounter}
                          onClick={() => setActiveConversation(c.id)}>
                {avatar}
            </Conversation>
        })}
            </ConversationList>
    </Sidebar>
  );
}

export default ChatSidebar;
