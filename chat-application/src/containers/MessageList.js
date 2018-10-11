import { connect } from 'react-redux';
import MessageListComponent from '../components/MessageLists'


export const MessageList = connect(state=>({
    messages: state.messages
}),{})(MessageListComponent); 