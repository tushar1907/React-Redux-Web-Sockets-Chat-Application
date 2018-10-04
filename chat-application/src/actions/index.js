import * as types from '../constants/ActionTypes'

const nextMessage = 0;
const nextUserId = 0;

export const addMessage = (message, author)=>({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const addUser = name=>({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

export const messageRecieved = (message,author)=>({
    type: types.MESSAGE_RECIEVED,
    id: nextMessageId++,

})

export const populateUsersList = users => ({
    type: type.USERS_LIST,
    users
})