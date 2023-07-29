import {
  BasicStorage,
  ChatProvider,
  IStorage,
  UpdateState,
  User,
} from '@chatscope/use-chat';
import { ExampleChatService } from '@chatscope/use-chat/dist/examples';
import Chat from '../Chat/Chat';
import { nanoid } from 'nanoid';
import { AutoDraft } from '@chatscope/use-chat/dist/enums/AutoDraft';
import React, { useEffect, useState, useMemo } from 'react';
import { useApiService } from '../../providers/ApiServiceProvider';
import { ChatDataService } from '../../api/ChatDataService';

export const MasterChat: React.FC = () => {
  const apiService = useApiService();
  const [currentUser, setCurrentUser] = useState<User<any> | null>(null);

  const userChatStorage = useMemo(() => {
    const messageIdGenerator = () => nanoid();
    const groupIdGenerator = () => nanoid();
    return new BasicStorage({ groupIdGenerator, messageIdGenerator });
  }, []);

  const serviceFactory = (storage: IStorage, updateState: UpdateState) => {
    return new ExampleChatService(storage, updateState);
  };

  // MasterChat.tsx
  useEffect(() => {
    const chatDataService = new ChatDataService(apiService, userChatStorage);
    chatDataService.initChatData()
      .then(setCurrentUser)
      .catch(error => console.error('Failed to initialize chat data:', error));
  }, [apiService, userChatStorage]);


  return currentUser ? (
    <ChatProvider
      serviceFactory={serviceFactory}
      storage={userChatStorage}
      config={{
        typingThrottleTime: 250,
        typingDebounceTime: 900,
        debounceTyping: true,
        autoDraft: AutoDraft.Save | AutoDraft.Restore,
      }}
    >
      <Chat user={currentUser} />
    </ChatProvider>
  ) : null; 
};

export default MasterChat;


