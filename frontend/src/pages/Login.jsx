import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import loginn from "../components/loginn.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: whitesmoke;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  border-radius: 15px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;

const Wrapper = styled.div`
  width: 70%;
  max-width: 400px;
  background-color: #eeeeee;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 15px;
  margin: 20px 0;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #005c59;
  }
`;

const Link = styled.a`
  margin: 20px 0;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userCheck = { email, password };
    console.log("Login attempt with:", userCheck);

    setLoading(true); // Disable the button during API call

    try {
      const response = await axios.post("http://localhost:5000/users/login", userCheck);
      console.log("Successful login response:", response.data);

      console.log("Successful login response:", response.data.user.role);

      // Dispatch to Redux if needed
      login(dispatch, { email, password });

      // Navigate based on role
      
      const  role  = response.data.user.role;
      if (role === "admin") {
        navigate("/admindashboard");
        console.log("Admin role detected. Navigating to admin dashboard.",role);
    } else {
      
      navigate("/dashboard");
      console.log("Admin role detected. Navigating to admin dashboard.",role);
      }
    } catch (error) {
      console.error("Error during login:", error.response || error);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false); // Re-enable the button
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Left>
          <Image src={loginn} alt="Login Illustration" />
        </Left>
        <Right>
          <Wrapper>
            <HeroTitle>Login</HeroTitle>
            <Form onSubmit={handleLogin}>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
              <Link href="/register">Create a new account</Link>
            </Form>
          </Wrapper>
        </Right>
      </Container>
      <Footer />
    </>
  );
};

export default Login;




