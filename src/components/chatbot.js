import React, { useState } from 'react';
import { Widget, addResponseMessage, toggle } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

//   const handleNewUserMessage = (newMessage) => {
//     // Handle incoming messages from the user
//     // addResponseMessage('Message received!');
//   };

  const handleClick = () => {
    toggle();
    setIsOpen(!isOpen);
    if (!isOpen) {
      addResponseMessage('Chatbot opened!');
    } else {
      addResponseMessage('Chatbot closed!');
    }
  };

  return (
    <div className="chatbot-container" onClick={handleClick}>
      <Widget
        // handleNewUserMessage={handleNewUserMessage}
        title="Medblock Chatbot"
        subtitle="Ask me anything!"
        isOpen={isOpen}
      />
    </div>
  );
};

export default Chatbot;