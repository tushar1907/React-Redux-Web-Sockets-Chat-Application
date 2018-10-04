const messages = (state = [], action){
    switch (action.type) {
        case 'ADD_MESSAGE':
        case 'MESSAGE_RECIEVED':
            return state.concat([{
                message: action.message,
                author: action.author,
                id: author.id
            }])
        default:
            return state
    }
}

export default messages;