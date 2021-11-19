import React from 'react';
import MessageList from './MessagList';
import NewMessage from './NewMessage';

class ChatWindow extends React.Component{
    
    render(){
        const {user,messages} = this.props;
        return(
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <MessageList user={user} messages={messages}></MessageList>

            <NewMessage user={user} addMessage={this.props.addMessage}></NewMessage>
          </div>
        )
    }
}

export default ChatWindow