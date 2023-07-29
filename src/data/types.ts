// types.ts

import { User } from '@chatscope/use-chat';


// export type User = {
//     name: string;
//     avatar: string;
// };

export type Room = {
    name: string;
    isDistinct: boolean;
    isPublic: boolean;
    isPasswordProtected: boolean;
    users: User[];
};
