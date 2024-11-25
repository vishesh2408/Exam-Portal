import React from 'react';
import styled from 'styled-components';

const HelpContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Instructions = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
  max-width: 600px;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Help = () => {
  const handleContactClick = () => {
    alert('You can contact support at support@examly.com or call +91 9616265078.');
  };

  return (
    <HelpContainer>
      <Instructions>
        <h2>Welcome to the Help Section</h2>
        <p>
          If you need assistance with using our online examination system, here are a few steps to guide you:
        </p>
        <ul>
          <li>Log in to your account to access exams.</li>
          <li>If you are an admin, you can create and manage exams from the admin dashboard.</li>
          <li>If you encounter any issues, feel free to contact our support team using the button below.</li>
        </ul>
      </Instructions>
      <ContactButton onClick={handleContactClick}>Contact Support</ContactButton>
    </HelpContainer>
  );
};

export default Help;
