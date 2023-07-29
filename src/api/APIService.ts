// APIService.ts
import axios from 'axios';

export class APIService {
  getSomeData() {
    return axios.get('https://example.com/api/data');
  }

  getUserRooms(userId: string) {
    return axios.get(`https://example.com/api/user/${userId}/rooms`);
  }
}
