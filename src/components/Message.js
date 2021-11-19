import React from 'react'

class Message extends React.Component{

    render(){
        const {user, message} = this.props
        return(
            <li className={
                    message.username === user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
            </li>
        )
    }
}

export default Message