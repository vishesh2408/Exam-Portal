import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color:#393E46;
  color: white;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-bottom: 0;
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 0 20px;
  h3 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  p, ul {
    font-size: 14px;
    color: #ccc;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 150px;
  a {
    color: white;
    font-size: 18px;
    transition: color 0.3s ease;
    &:hover {
      color: #007bff;
    }
  }
`;

const FooterBottom = styled.div`
 
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>About Us</h3>
          <p>Our online examination system provides secure, efficient, and user-friendly exam solutions for students and admins alike.</p>
        </FooterColumn>
        <FooterColumn>
          <h3>Contact</h3>
          <ul>
            <li>Email: <a href="mailto:support@onlineexam.com">support@onlineexam.com</a></li>
            <li>Phone: +91 9616265078</li>
            <li>Address: 123 Exam St., Education City</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/user/login">User Login</a></li>
            <li><a href="/admin/login_admin.php">Admin Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Follow Us</h3>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </SocialIcons>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 Examly. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
