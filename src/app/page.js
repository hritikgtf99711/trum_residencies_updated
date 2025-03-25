import Expertise from "./components/Home/Expertise";
import Header from "./components/Home/Header";
import HeroSection from "./components/Home/HeroSection";
import WhoWeAre from "./components/Home/WhoWeAre";
const Home = () => {
  return (
    <div className="mb-[100px]">
      <Header />
      <HeroSection />
      <Expertise />
      <WhoWeAre />
    </div>
  );
};
export default Home;
