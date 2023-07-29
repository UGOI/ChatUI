// WebSocketService.ts
import { Server } from "socket.io";

export class WebSocketService {
  private io: Server;

  constructor(server: any) {
    this.io = new Server(server);

    this.io.on("connection", (socket) => {
      console.log(`New client connected: ${socket.id}`);
      // You can add more event handlers here
    });
  }
}
