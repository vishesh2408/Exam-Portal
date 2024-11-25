import { AccessTime, Check, FlashOn, Lock, Public, Recommend } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  justify-content: space-between;
  gap: 20px;
`;

const BigTitle = styled.div`
  text-align: center;
  font-size: 42px;
  color: #393E46;
  border-top: 3px solid #393E46;
  border-bottom: 3px solid #393E46;
  margin-bottom: 20px;
`;

const Image = styled.div`
  color: #393E46;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-5px);
  }
`;

const Title = styled.div`
  color: #393E46;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  text-align: center;
  color: #393E46;
  font-size: 14px;
  line-height: 1.5;
  padding: 0 10px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 10px;
  height: 20vh;
  max-width: 300px;
`;

const AllItems = styled.div`
  background-color: #e8e8e8;
  padding: 20px;
  border-radius: 8px;
`;

const Introducing = () => {
  return (
    <AllItems>
      <BigTitle>Awesome <b>Features</b></BigTitle>
      <Container>
        <Section>
          <Info>
            <Image><Public /></Image>
            <Title>Access anywhere</Title>
            <Description>Being online allows you and your respondents to access, administer and take your exams from anywhere at anytime.</Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image><Lock /></Image>
            <Title>Secured </Title>
            <Description>Secure your data with SSL encryption, ensuring all user information and assessments are protected.</Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image><Check /></Image>
            <Title>Auto-grading</Title>
            <Description>Examly can automatically grade your assessments, saving you the time.</Description>
          </Info>
        </Section>
      </Container>
      <Container>
        <Section>
          <Info>
            <Image><AccessTime /></Image>
            <Title>Timed tests</Title>
            <Description>With Examly it is easy to set a time limit.</Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image><FlashOn /></Image>
            <Title>Custom Tests</Title>
            <Description>With Examly you can customize your tests easily.</Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image><Recommend /></Image>
            <Title>7/24 live support</Title>
            <Description>Being online allows you and your respondents to access, administer and take your Exams and quizzes from anywhere at anytime.</Description>
          </Info>
        </Section>
      </Container>
    </AllItems>
  );
};

export default Introducing;
