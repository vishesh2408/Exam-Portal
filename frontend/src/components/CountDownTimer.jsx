import React from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #2c3e50;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 120px;
  text-align: center;
  color: white;
  z-index: 1000;
`;

const TimerDisplay = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 5px;
  background-color: #34495e;
  border-radius: 5px;
  letter-spacing: 1px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: ${(props) => (props.reset ? '#e74c3c' : '#3498db')};
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.reset ? '#c0392b' : '#2980b9')};
  }
`;

const CountDownTimer = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  }, [hrs, mins, secs]);

  return (
    <TimerContainer>
      <TimerDisplay>
        {`${hrs.toString().padStart(2, '0')}:${mins
          .toString()
          .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
      </TimerDisplay>
      <ButtonContainer>
        <Button reset onClick={reset}>
          Reset
        </Button>
      </ButtonContainer>
    </TimerContainer>
  );
};

export default CountDownTimer;
