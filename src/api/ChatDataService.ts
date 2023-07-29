import { User, Presence, UserStatus } from '@chatscope/use-chat';
import { nanoid } from 'nanoid';
import { MockAPIService } from './MockAPIService';
import { BasicStorage, TypingUsersList } from '@chatscope/use-chat';
import { ConversationId, Conversation, Participant, ConversationRole } from '@chatscope/use-chat';
import { Room } from '../data/types';

export class ChatDataService {
  constructor(private apiService: MockAPIService, private userChatStorage: BasicStorage) { }

  async initChatData(): Promise<User<any>> {
    const user = await this.apiService.getCurrentUser();
    this.userChatStorage.addUser(user);

    const response = await this.apiService.getUserRooms();
    const rooms = response.data;
    rooms.forEach(room => {
      const roomId = nanoid();
      this.userChatStorage.addConversation(this.createConversation(roomId, room));
      room.users.forEach(user => {
        this.userChatStorage.addUser(new User({
          id: user.username,
          presence: new Presence({ status: UserStatus.Available, description: '' }),
          firstName: '',
          lastName: '',
          username: user.username,
          email: '',
          avatar: user.avatar,
          bio: '',
        }));
      });
    });

    return user;
  }

    private createConversation(id: ConversationId, room: Room): Conversation {
      const participants = room.users.map((user: User) => user.username);
      return new Conversation({
        id,
        participants: participants.map((name: string) => new Participant({
          id: name,
          role: new ConversationRole([]),
        })),
        unreadCounter: 0,
        typingUsers: new TypingUsersList({ items: [] }),
        draft: '',
        data: {
          roomName: room.name,
          isDistinct: room.isDistinct,
          // ... any other room properties you want to store
        },
      });
  }

}
