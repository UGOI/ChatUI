// ChatContainerComponent.tsx
import React from 'react';
import { ChatContainer, MessageList, Message, MessageInput, ConversationHeader, MessageGroup } from "@chatscope/chat-ui-kit-react";

import {
  User,
  ChatMessage,
  MessageContentType,
} from "@chatscope/use-chat";

interface ChatContainerComponentProps {
  user: User;
  activeConversation: any;
  currentMessages: any;
  currentUserName: any;
  currentUserAvatar: any;
  currentMessage: any;
  handleChange: (value: string) => void;
  handleSend: (text: string) => void;
  getTypingIndicator: () => any;
  getUser: (id: string) => any;
}


function ChatContainerComponent({
    activeConversation,
    currentMessages,
    currentUserAvatar,
    currentMessage,
    handleChange,
    handleSend,
    getTypingIndicator,
    getUser
}: ChatContainerComponentProps) {

  function getUserName() {
    const participant = activeConversation.participants.length > 0 
      ? activeConversation.participants[1] 
      : undefined;
    if (participant) {
      const user = getUser(participant.id);
      if (user) {
        return activeConversation.data.isDistinct ? user.username : activeConversation.data.roomName;
      }
    }
    return activeConversation.id;
  }
    return (
      <ChatContainer>
        {activeConversation &&
          <ConversationHeader>
            {currentUserAvatar}
            <ConversationHeader.Content userName={getUserName()} />
          </ConversationHeader>
          }
        <MessageList typingIndicator={getTypingIndicator()}>
            {activeConversation && currentMessages.map( (g: any) => <MessageGroup key={g.id} direction={g.direction}>
                <MessageGroup.Messages>
                    {g.messages.map((m:ChatMessage<MessageContentType>) => <Message key={m.id} model={{
                        type: "html",
                        payload: m.content,
                        direction: m.direction,
                        position: "normal"
                    }} />)}
                </MessageGroup.Messages>
            </MessageGroup>)}
        </MessageList>
        <MessageInput value={currentMessage} onChange={handleChange} onSend={handleSend} disabled={!activeConversation} attachButton={false} placeholder="Type here..."/>
  </ChatContainer>
    );
}

export default ChatContainerComponent;
