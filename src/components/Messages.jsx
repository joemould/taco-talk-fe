import React, { PureComponent } from 'react';

class Messages extends PureComponent {
  render() {
    const msgArr = this.props.messages;
    return (
      <div className="messagesWrapper">
        <h3>Messages</h3>
        <ul id="messages">
          {msgArr.map((msg, index) => {
            return <li key={`taco${index}`}>{`${msg.user} : ${msg.msg}`}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Messages;
