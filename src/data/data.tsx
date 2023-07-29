import akaneAvatar from "../assets/akane.svg";
import eliotAvatar from "../assets/eliot.svg";
import emilyAvatar from "../assets/emily.svg";
import joeAvatar from "../assets/joe.svg";
import { Room } from './types';
import { User } from '@chatscope/use-chat';
import { Presence, UserStatus } from '@chatscope/use-chat';

export const currentUserModel: User = {
    id: "Akane",
    firstName: "Akane",
    lastName: "",
    username: "Akane",
    email: "",
    avatar: akaneAvatar,
    bio: "",
    presence: new Presence({ status: UserStatus.Available, description: '' }),
};

export const eliotModel: User = {
    id: "Eliot",
    firstName: "Eliot",
    lastName: "",
    username: "Eliot",
    email: "",
    avatar: eliotAvatar,
    bio: "",
    presence: new Presence({ status: UserStatus.Available, description: '' }),
};

export const emilyModel: User = {
    id: "Emily",
    firstName: "Emily",
    lastName: "",
    username: "Emily",
    email: "",
    avatar: emilyAvatar,
    bio: "",
    presence: new Presence({ status: UserStatus.Available, description: '' }),
};

export const joeModel: User = {
    id: "Joe",
    firstName: "Joe",
    lastName: "",
    username: "Joe",
    email: "",
    avatar: joeAvatar,
    bio: "",
    presence: new Presence({ status: UserStatus.Available, description: '' }),
};

export const users: User[] = [
    currentUserModel,
    eliotModel,
    emilyModel,
    joeModel  
];

export const rooms: Room[] = [
    { name: 'Room 1', isDistinct: true, isPublic: false, isPasswordProtected: false, users: [currentUserModel, eliotModel] },
    { name: 'Room 2', isDistinct: false, isPublic: true, isPasswordProtected: false, users: [currentUserModel, emilyModel, joeModel]},
    { name: 'Room 3', isDistinct: true, isPublic: false, isPasswordProtected: true, users: [currentUserModel, emilyModel, joeModel]},
    // add more rooms as needed
];
