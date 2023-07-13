// ChatContainerComponent.tsx
import React from 'react';
import { ChatContainer, MessageList, Message, MessageInput, ConversationHeader, Avatar } from "@chatscope/chat-ui-kit-react";




function ChatContainerComponent() {
  return (
    <ChatContainer>
      <ConversationHeader>
        <Avatar src="https://placekitten.com/50/50" name="Emily" />
        <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />
        <ConversationHeader.Actions>
          {/* Add your buttons here */}
        </ConversationHeader.Actions>
      </ConversationHeader>
      <MessageList>
        <Message
          model={{
            message: "Hello, how can I help you?",
            sentTime: "just now",
            sender: "Support",
            direction: "incoming", // "incoming" or "outgoing" based on who sent the message
            position: "single", // "single", "first", "normal", or "last" based on position in a group of messages
          }}
        />
      </MessageList>
      <MessageInput placeholder="Type message here..." />
    </ChatContainer>
  );
}

export default ChatContainerComponent;
