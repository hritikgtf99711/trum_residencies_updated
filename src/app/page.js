import Header from "./_parts/header";
import Banner from "./Components/home/Banner";
import About from "./Components/home/About_project";
import ViewMap from "./Components/home/ViewMap";
import AboutUs from "./Components/home/About_us";
import Interiors from "./Components/home/Interiors_sec";
import Form from "./Components/home/Form_sec";
import Smart_world from "./Components/home/Smart_world";
import Tribeca_sec from "./Components/home/Tribeca_sec";
import Amenities from "./Components/home/Amenities";
export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
      <Header />
      <Banner />
      <About/>
      <ViewMap/>
      <AboutUs/>  
      <Interiors/>
      <Amenities/>
      <Tribeca_sec/>
      <Smart_world/>
      <Form/>
      </div>
    </>
  );
}
