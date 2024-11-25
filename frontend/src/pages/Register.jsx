import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import loginn from '../components/loginn.png'; 

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -moz-linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%);
  border-radius: 20px;
  margin-top: 70px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 30px;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
  color: #212222;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  margin: 10px 0;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 80%;
  padding: 12px;
  margin: 20px 0;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #005c59;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  margin-top: 20px;
  font-size: 15px;
  color: teal;
  text-decoration: underline;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  overflow: hidden;
`;

const Register = () => {

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const registered = {
      firstname: name,
      lastname: lastName,
      email: email,
      role: 'user',
      password: pass,
    };
    console.log(registered);
    axios.post("http://localhost:5000/users/", registered).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });

    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <Container>
        <MainContainer>
          {/* Left Image Section */}
          <ImageContainer>
            <img src={loginn} alt="Register Illustration" />
          </ImageContainer>
          {/* Right Registration Form */}
          <Wrapper>
            <HeroTitle>Sign up to Examly for free</HeroTitle>
            <Title>Register to create and manage online exams, tests, quizzes, and assessments with Examly.</Title>
            <FormWrapper>
              <Form onSubmit={handleRegister}>
                <Input placeholder="Email (username)" type="email" onChange={e => setEmail(e.target.value)} required />
                <Input placeholder="First Name" type="text" onChange={e => setName(e.target.value)} required />
                <Input placeholder="Last Name" type="text" onChange={e => setLastName(e.target.value)} required />
                <Input placeholder="Password" type="password" onChange={e => setPass(e.target.value)} required />
                <Button type="submit">Register for free</Button>
              </Form>
            </FormWrapper>
            <Link href="/login">Already have an account? Login</Link>
          </Wrapper>
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
