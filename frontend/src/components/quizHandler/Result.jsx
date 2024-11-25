import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import LoginNavbar from "../LoginNavbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Message = styled.span`
  font-size: 1.2rem;
  color: ${(props) => (props.isPassed ? "#2ecc71" : "#e74c3c")};
  margin-top: 10px;
`;

const Image = styled.img`
  height: 200px;
  width: 300px;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Result = () => {
  const [score, setScore] = useState(0);
  const [passGrade, setPassGrade] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params;

  useEffect(() => {
    getExamNames();
  }, [setScore]);

  const getExamNames = async () => {
    const { data } = await axios.get(`http://localhost:5000/userexams/exam/${id.id}`);
    setScore(data);
    getPassGrade();
  };

  const getPassGrade = async () => {
    await axios.get(`http://localhost:5000/exam/exam/${id.id}`).then((response) => {
      setPassGrade(response.data);
    });
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <>
        <LoginNavbar />
        <Loader>
          <div></div>
        </Loader>
        <Footer />
      </>
    );
  }

  return (
    <>
      <LoginNavbar />
      <Container>
        <Title>Final Score: {score[0]?.grade}</Title>
        {passGrade[0]?.passGrade < score[0]?.grade ? (
          <>
            <Message isPassed>Congratulations, you passed the exam!</Message>
            <Image src="https://i.ibb.co/7vPw6r4/Png-Item-30479.png" alt="Passed" />
          </>
        ) : (
          <>
            <Message isPassed={false}>Sorry, you failed the exam.</Message>
            <Image src="https://www.onlygfx.com/wp-content/uploads/2020/05/fail-stamp-7.png" alt="Failed" />
          </>
        )}
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Result;
