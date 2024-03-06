import React from "react";
import Heading from "../utillites/Heading";
import DoctorCard from "../utillites/DoctorCard";
import doctor1 from "../../assets/doctor/doctor.png";
import doctor2 from "../../assets/doctor/doctor3.png";
import doctor3 from "../../assets/doctor/doctor2.png";
import doctor4 from "../../assets/doctor/doctor4.png";
import Button from "../utillites/Button";
const Ourdoctor: React.FC = () => {
  return (
    <div className="mt-[149px]">
      <div>
        <Heading
          title="OUR DOCTORS"
          description="Doctors Are Waiting To Cure You"
        />
      </div>
      <div className="grid grid-cols-4 mt-[46px]">
        <DoctorCard img={doctor1} name="Dr. Mst Aleya Khatun" title="Gynae" />
        <DoctorCard
          img={doctor2}
          name="Dr. Quazi Md Shafiqur Rahman"
          title="Medicine Specialist"
        />
        <DoctorCard
          img={doctor3}
          name="Dr. Rokunuzzaman"
          title="Immunology & Oncologist"
        />
        <DoctorCard
          img={doctor4}
          name="Dr. Aminur Rahman"
          title="Neurologist"
        />
      </div>
      <div className="flex justify-center items-center mt-[97px]">
        <Button title="View All Doctor" />
      </div>
    </div>
  );
};

export default Ourdoctor;
