import './App.css'
import Navbar from "./components/navbar/navbar"
import LeftTextRightImage from "./components/LeftTextRightImage/LeftTextRightImage"
import Footer from "./components/Footer/Footer"
import rp2 from './img/rp2.jpg'
import p1 from './img/p1.png'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="head">
        <h4>Let's Collaborate</h4>
      </div>
      <Fade bottom delay={100} upDelay={100}>
        <LeftTextRightImage
          heading="AI + RPA is what we do"
          text="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
          imageSrc={rp2}
          imageAlt="My image"
          discription="AI + RPA Automation"
          linkUrl="www.gvpce.ac.in"
        />
      </Fade>
      <Fade bottom delay={200} upDelay={100}>
        <LeftTextRightImage
          heading="Make Bolder Choices"
          text="Digital focused strategies to realize market-changing ideas"
          imageSrc={p1}
          imageAlt="My image"
          discription="Build Better Apps"
        />
      </Fade>
      <Fade bottom delay={300} upDelay={100}>
        <LeftTextRightImage
          heading="Innovate with Speed"
          text="Create higher quality software, deliver on customer expectations and business goals"
          imageSrc={p2}
          imageAlt="My image"
          discription="DevOps"
        />
      </Fade>
      <Fade bottom delay={400} upDelay={100}>
        <LeftTextRightImage
          heading="Embrace Cloud"
          text="With Cloud-First accelerate innovation and optimize performance"
          imageSrc={p3}
          imageAlt="My image"
          discription="Cloud Service"
        />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
