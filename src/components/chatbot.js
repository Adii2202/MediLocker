import React, { useState } from 'react';
import { Widget, addResponseMessage, toggle } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

const Chatbot = () => {

  const handleNewUserMessage = async (newMessage) => {
    try {
      const formData = new FormData();
      formData.append('text', newMessage);
      const response = await axios.post('http://127.0.0.1:5000/chat', formData);
      const responseData = response.data; // Assuming the response data is in JSON format
      addResponseMessage(responseData); // Display the response in the widget
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    toggle();
    if (!toggle) {
      addResponseMessage('Chatbot opened!');
    } else {
      addResponseMessage('Chatbot closed!');
    }
  };

  return (
    <div onClick={handleClick} style={{maxWidth: '500px', overflowY: 'auto' }}>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="MediLocker Chatbot"
        subtitle="Ask me anything!"
      />
    </div>
    
  );
};

export default Chatbot;