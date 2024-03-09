import React from "react";
import Contactus from "../../component/Homecomponent/Contactus";
import Header from "../../component/Homecomponent/Header";
import Bookappoinment from "../../component/Homecomponent/Bookappoinment";
import Ourdoctor from "../../component/Homecomponent/Ourdoctor";
import Testimonial from "../../component/Homecomponent/Testimonial";

const Home: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Header />
      <Bookappoinment />
      <Ourdoctor />
      <Testimonial />
      <Contactus />
    </div>
  );
};

export default Home;
