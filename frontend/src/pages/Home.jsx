import Features from '../components/Features'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Introducing from '../components/Introducing';
import Navbar from "../components/Navbar";
import QuickInfo from '../components/QuickInfo';
import Features2 from '../components/Features2';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features2/>
      <Features />
      <QuickInfo/>
      <Introducing/>
      <Footer/>
    </div>
  )
}

export default Home