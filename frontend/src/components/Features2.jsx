import styled from 'styled-components';
import img11 from './img11.jpg';
import secure from './secure.jpg';
import result from './result.jpg';
import register from './register.jpg';
import attendence from './attendence.png';
import examcreator from './examcreator.jpg';

const FeaturesSection = styled.section`
  padding: 50px 0;
  background-color: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 36px;
    color: #393e46;
    margin-bottom: 40px;
  }
`;

const FeatureCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureImage = styled.div`
  margin-bottom: 20px;

  img {
    width: 210px;
    height: 150px;
    object-fit: contain;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  color: #393e46;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 20px;
`;

const CardButton = styled.button`
  background-color: #393e46;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
  }
`;

const StatisticsSection = styled.section`
  background-color: #f2f2f2;
  padding: 50px 0;
  text-align: center;

  h2 {
    font-size: 36px;
    color: #393e46;
    margin-bottom: 30px;
  }

  .statistics-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
  }

  .stat-item {
    font-size: 24px;
    color: #393e46;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const FeatureSection = styled.section`
  padding: 50px 0;
  background-color: #ffffff;
  text-align: center;

  h2 {
    font-size: 36px;
    color: #393e46;
    margin-bottom: 40px;
  }
`;

const Features2 = () => {
  return (
    <>
      <FeaturesSection>
        <h2>Features</h2>
        <FeatureCards>
          <FeatureCard>
            <FeatureImage>
              <img src={img11} alt="Easy Exam Setup" />
            </FeatureImage>
            <FeatureTitle>Easy Exam Setup</FeatureTitle>
            <FeatureDescription>Set up exams with ease and simplicity, whether for a small group or large scale.</FeatureDescription>
            <CardButton>Learn More</CardButton>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage>
              <img src={secure} alt="Secure Environment" />
            </FeatureImage>
            <FeatureTitle>Secure Environment</FeatureTitle>
            <FeatureDescription>Our platform ensures that all exams are conducted in a secure and fair environment.</FeatureDescription>
            <CardButton>Learn More</CardButton>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage>
              <img src={result} alt="Instant Results" />
            </FeatureImage>
            <FeatureTitle>Instant Results</FeatureTitle>
            <FeatureDescription>Get instant feedback and results after completing your exams.</FeatureDescription>
            <CardButton>Learn More</CardButton>
          </FeatureCard>
        </FeatureCards>
      </FeaturesSection>

      <StatisticsSection>
        <h2>Statistics</h2>
        <div className="statistics-container">
          <div className="stat-item">15K+ Students</div>
          <div className="stat-item">75% Total success</div>
          <div className="stat-item">35 Main questions</div>
          <div className="stat-item">26 Chief experts</div>
          <div className="stat-item">16 Years of experience</div>
        </div>
      </StatisticsSection>

      <FeatureSection>
        <h2>All-In-One Examination Platform</h2>
        <FeatureCards>
          <FeatureCard>
            <FeatureImage>
              <img src={register} alt="Online Registration" />
            </FeatureImage>
            <FeatureTitle>Online Registration</FeatureTitle>
            <FeatureDescription>Allow users to register and manage their profiles easily.</FeatureDescription>
            <CardButton>Learn More</CardButton>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage>
              <img src={attendence} alt="Attendance Tracking" />
            </FeatureImage>
            <FeatureTitle>Attendance Tracking</FeatureTitle>
            <FeatureDescription>Keep detailed records of student attendance during exams.</FeatureDescription>
            <CardButton>Learn More</CardButton>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage>
              <img src={examcreator} alt="Exam Creation Tools" />
            </FeatureImage>
            <FeatureTitle>Exam Creation Tools</FeatureTitle>
            <FeatureDescription>Allows examiners to design exams, add questions, set question formats, and manage time limits.</FeatureDescription>
            <CardButton>Learn More</CardButton>
          </FeatureCard>
        </FeatureCards>
      </FeatureSection>
    </>
  );
};

export default Features2;
