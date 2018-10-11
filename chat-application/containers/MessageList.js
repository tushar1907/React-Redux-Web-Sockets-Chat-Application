import { connect } from 'react-redux';
import MessageListComponent from '../components/MessageLists'
import { addMessage } from '../actions'



export const MessagesLists = connect(state=>({
    messages: state.message
}),mapDispatchToProps)(MessageListComponent); 