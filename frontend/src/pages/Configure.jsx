import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 60vh;
  border-collapse: collapse;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: #eeeeee;
`;

const Wrapper = styled.div`
  width: 86%;
  height: 100%;
  margin: 0% 7%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Form = styled.form`
  height: 100%;
  margin: 0% 10%;
  display: flex;
  flex-wrap: wrap;
  background-color: #eeeeee;
`;

const Input = styled.input`
  min-width: 500px;
  margin: 20px 10px 0px 0px;
  padding: 5px;
  border: none;
  border-radius: 3px;
`;

const Label = styled.label`
  font-size: 14px;
  padding: 10px;
`;

const Section = styled.div`
  margin: 10px 20px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-radius: 3px;
  background-color: #0275d8;
  color: white;
  margin: 10px 20px;
  padding: 10px 30px;
  cursor: pointer;
`;

const Configure = () => {
  const [myStartDatas, setMyStartDatas] = useState([]);
  const [examName, setExamName] = useState('');
  const [examGrade, setExamGrade] = useState(0);
  const [examTime, setExamTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getConfigureData();
  }, []);

  const getConfigureData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/exam/${id}`);
      setMyStartDatas(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleConfigure = async (e) => {
    e.preventDefault();
    const exam = {
      examname: examName || myStartDatas[0]?.examname,
      time: examTime || myStartDatas[0]?.time,
      passGrade: examGrade || myStartDatas[0]?.passGrade,
    };
    try {
      const response = await axios.patch(`http://localhost:5000/exam/${id}`, exam, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.status, response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating exam:', error);
    }
  };

  if (isLoading) {
    return (
      <>
        <LoginNavbar />
        <div
          style={{
            verticalAlign: 'middle',
            display: 'flex',
            border: '16px solid #f3f3f3',
            borderRadius: '50%',
            borderTop: '16px solid #3498db',
            width: '120px',
            height: '120px',
            animation: 'spin 2s linear infinite',
          }}
        ></div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <LoginNavbar />
      <Container>
        <Wrapper>
          <Form onSubmit={handleConfigure}>
            <Section>
              <Label htmlFor="quizName">Quiz Name</Label>
              <Input
                type="text"
                name="quizName"
                placeholder={myStartDatas[0]?.examname || ''}
                onChange={(e) => setExamName(e.target.value)}
              />
            </Section>
            <Section>
              <Label htmlFor="time">Time Limit</Label>
              <Input
                type="number"
                name="time"
                placeholder={myStartDatas[0]?.time || ''}
                onChange={(e) => setExamTime(Number(e.target.value))}
              />
            </Section>
            <Section>
              <Label htmlFor="grade">Pass Grade</Label>
              <Input
                type="text"
                name="grade"
                placeholder={myStartDatas[0]?.passGrade || ''}
                onChange={(e) => setExamGrade(Number(e.target.value))}
              />
            </Section>
            <Section>
              <Button type="submit" style={{ margin: '0px 400px 20px 20px' }}>
                Save
              </Button>
            </Section>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Configure;
