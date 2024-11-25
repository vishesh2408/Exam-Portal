import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoginNavbar from "../LoginNavbar";
import Footer from "../Footer";


const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #f0f8ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const SingleQuestion = styled.div`
  width: 90%;
  max-width: 800px;
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const QuestionText = styled.h2`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 20px;
`;

const Options = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const SingleOption = styled.button`
  background: ${(props) =>
    props.selected ? (props.correct ? "#28a745" : "#dc3545") : "#f8f9fa"};
  color: ${(props) => (props.selected ? "white" : "#333")};
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  font-size: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: ${(props) =>
      props.selected ? (props.correct ? "#218838" : "#c82333") : "#e9ecef"};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
  userId,
  exam_id,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const id = params;

  useEffect(() => {
    handleCreatorUser();
  }, []);

  const handleCreatorUser = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/exam/exam/" + id.id
    );
    setPass(data[0].creatorUserId === userId);
    setIsLoading(false);
  };

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return true;
    else if (selected === i && selected !== correct) return false;
    else if (i === correct) return true;
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if (currQues >= questions.length - 1) {
      navigate(`/result/${id.id}`);
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass === userId) {
      console.log("Data did not save");
    } else {
      const userExam = {
        userId: userId,
        examId: id.id,
        grade: score,
      };
      axios
        .patch(`http://localhost:5000/userexams/${exam_id}`, userExam)
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
        });
    }
  };

  if (isLoading) {
    return (
      <>
        <LoginNavbar />
        <Spinner />
        <Footer />
      </>
    );
  }

  return (
    <Container>
      <Title>Question {currQues + 1}:</Title>
      <SingleQuestion>
        <QuestionText>{questions[currQues].questionTitle}</QuestionText>
        <Options>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((option) => (
              <SingleOption
                selected={selected === option.option}
                correct={handleSelect(option.option)}
                key={option._id}
                onClick={() => handleCheck(option.option)}
                disabled={selected}
              >
                {option.option}
              </SingleOption>
            ))}
        </Options>
        <Control>
          <Button onClick={handleNext}>
            {currQues >= questions.length - 1 ? "Submit" : "Next Question"}
          </Button>
        </Control>
      </SingleQuestion>
    </Container>
  );
};

export default Question;
