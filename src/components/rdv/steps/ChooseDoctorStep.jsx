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
      updateData({ selectedDoctor });
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
      <Button
        className="bg-primary my-4"
        disabled={disabled}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default ChooseDoctorStep;
