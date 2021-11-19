import React from 'react'
import Message from './Message';

class MessageList extends React.Component{

    render(){
        const {user, messages} = this.props
        return(
            <ul className="message-list">
              {messages.map((message, index) => (
                  <Message message={message} key={index} user={user}></Message>
              ))}
            </ul>
        )
    }
}

export default MessageList