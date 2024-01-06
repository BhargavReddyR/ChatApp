import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
  };

  const handleLikeMessage = (id) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, liked: !msg.liked } : msg
    );
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-page">
      <h1>Chat Interface</h1>
      <div className="chat-history">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
            <div className="message-actions">
              <button onClick={() => handleLikeMessage(message.id)}>
                {message.liked ? 'Unlike' : 'Like'}
              </button>
              <button onClick={() => handleDeleteMessage(message.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;