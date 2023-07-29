// MockWebSocketService.ts
export class MockWebSocketService {
    on(event: string, callback: Function) {
      // Simulate WebSocket events
      console.log(`Event: ${event}`);
    }
  }

