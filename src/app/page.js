"use client"
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
import Modal from "./utils/Modal";
import FormMain from "./utils/Form";
import { useModal } from "./hooks/modaContext";
export default function Home({formVia,logoRedirectVia}) {
  const { isOpen, closeModal } = useModal();
  return (
    <>
      <div className="overflow-hidden">
      <Header  logoRedirectVia={logoRedirectVia}/>
      <Banner />
      <About/>
      <ViewMap/>
      <AboutUs/>  
      <Interiors/>
      <Amenities/>
      <Tribeca_sec/>
      <Smart_world/>
      <Form  formVia={formVia}/>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <FormMain/>
      </Modal>
      </div>
    </>
  );
}
