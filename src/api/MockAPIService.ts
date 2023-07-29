// MockAPIService.ts
import { users, rooms, currentUserModel } from '../data/data';
import { User, Presence, UserStatus } from '@chatscope/use-chat';
import { Room } from '../data/types';

export class MockAPIService {
  getSomeData() {
    return Promise.resolve({ status: 200, data: users });
  }

  getUserRooms() {
    const userRooms: Room[] = rooms;
    if (userRooms) {
      return Promise.resolve({ status: 200, data: userRooms });
    } else {
      return Promise.reject({ status: 404, error: "User not found" });
    }
  }

  getCurrentUser(): Promise<User<any>> {
    const currentUser = currentUserModel;
    if (currentUser) {
      return Promise.resolve(new User({
        id: currentUser.username,
        presence: new Presence({ status: UserStatus.Available, description: '' }),
        firstName: '',
        lastName: '',
        username: currentUser.username,
        email: '',
        avatar: currentUser.avatar,
        bio: '',
      }));
    } else {
      return Promise.reject({ status: 404, error: "User not found" });
    }
  }
}
