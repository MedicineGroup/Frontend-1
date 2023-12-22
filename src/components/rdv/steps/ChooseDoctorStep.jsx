/* eslint-disable react/prop-types */
import { useState } from "react";
import DoctorsList from "../DoctorsList";
import { Button } from "@material-tailwind/react";

const ChooseDoctorStep = ({ onNext, updateData, service }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setDisabled(false);
  };

  const handleNext = () => {
    // Check if a doctor is selected before proceeding
    if (selectedDoctor) {
      // Update data in the parent component
      updateData({ selectedDoctor: selectedDoctor._id });
      // Move to the next step
      onNext();
    }
  };

  return (
    <div>
      <h2 className="mb-3 text-center font-semibold text-lg">
        Step 1: Select Doctor
      </h2>
      <DoctorsList onSelectDoctor={handleSelectDoctor} service={service} />
      <div className="flex flex-row w-full justify-end px-2">
        <Button
          className="bg-primary my-4"
          disabled={disabled}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChooseDoctorStep;
