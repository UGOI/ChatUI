// // import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//     BasicStorage,
//     ChatMessage,
//     ChatProvider,
//     Conversation,
//     ConversationId,
//     ConversationRole,
//     IStorage,
//     MessageContentType,
//     Participant,
//     Presence,
//     TypingUsersList,
//     UpdateState,
//     User,
//     UserStatus
// } from "@chatscope/use-chat";
// import {ExampleChatService} from "@chatscope/use-chat/dist/examples";
// import Chat from "./components/Chat/Chat";
// import {nanoid} from "nanoid";
// // import {Col, Container, Row} from "react-bootstrap";
// import {currentUserModel, users} from "./data/data";
// import {AutoDraft} from "@chatscope/use-chat/dist/enums/AutoDraft";
// import { ApiServiceProvider } from './providers/ApiServiceProvider'; // import your API Service Provider
// import { APIService } from './api/APIService';


// // sendMessage and addMessage methods can automagically generate id for messages and groups
// // This allows you to omit doing this manually, but you need to provide a message generator
// // The message id generator is a function that receives message and returns id for this message
// // The group id generator is a function that returns string
// const messageIdGenerator = (message: ChatMessage<MessageContentType>) => nanoid();
// const groupIdGenerator = () => nanoid();

// const userChatStorage = new BasicStorage({groupIdGenerator, messageIdGenerator});


// // Create serviceFactory
// const serviceFactory = (storage: IStorage, updateState: UpdateState) => {
//     return new ExampleChatService(storage, updateState);
// };


// const currentUser = new User({
//     id: currentUserModel.name,
//     presence: new Presence({status: UserStatus.Available, description: ""}),
//     firstName: "",
//     lastName: "",
//     username: currentUserModel.name,
//     email: "",
//     avatar: currentUserModel.avatar,
//     bio: ""
// });

// const user_chat = {name: "Akane", storage: userChatStorage};


// function createConversation(id: ConversationId, participants: string[]): Conversation {
//     return new Conversation({
//         id,
//         participants: participants.map(name => new Participant({
//             id: name,
//             role: new ConversationRole([])
//         })),
//         unreadCounter: 0,
//         typingUsers: new TypingUsersList({items: []}),
//         draft: ""
//     });
// }


// // Add users and conversations to the states

// // Add users and conversations to the states
// users.forEach(u => {
//     if (u.name !== user_chat.name) {
//         user_chat.storage.addUser(new User({
//             id: u.name,
//             presence: new Presence({status: UserStatus.Available, description: ""}),
//             firstName: "",
//             lastName: "",
//             username: u.name,
//             email: "",
//             avatar: u.avatar,
//             bio: ""
//         }));
//     }
// });

// // Create a conversation (room) with multiple participants
// const roomParticipants = users.map(user => user.name);
// const roomId = nanoid();
// user_chat.storage.addConversation(createConversation(roomId, roomParticipants));

// function App() {
//     return (
//       <div>
//          <ApiServiceProvider serviceFactory={() => new APIService()}>
//           <ChatProvider
//             serviceFactory={serviceFactory}
//             storage={userChatStorage}
//             config={{
//               typingThrottleTime: 250,
//               typingDebounceTime: 900,
//               debounceTyping: true,
//               autoDraft: AutoDraft.Save | AutoDraft.Restore
//             }}
//           >
//             <Chat user={currentUser} />
//           </ChatProvider>
//         </ApiServiceProvider>
//       </div>
//     );
//   }

// export default App;


// App.js

import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ApiServiceProvider } from './providers/ApiServiceProvider';
import MasterChat from './components/MasterChat/MasterChat';
import { MockAPIService } from './api/MockAPIService';

function App() {
  return (
    <div>
      <ApiServiceProvider serviceFactory={() => new MockAPIService()}>
        <MasterChat />
      </ApiServiceProvider>
    </div>
  );
}

export default App;
