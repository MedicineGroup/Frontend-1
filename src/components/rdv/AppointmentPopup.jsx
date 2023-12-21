/* eslint-disable react/prop-types */
import { useState } from "react";
import ChooseDoctorStep from "./steps/ChooseDoctorStep";
import ChooseTimeStep from "./steps/ChooseTimeStep";

const AppointmentPopup = ({ onClose, service }) => {
  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    selectedDoctor: "",
    selectedDateTime: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Add logic to submit the appointment using appointmentData
    // You may want to close the popup or navigate to another page after submission
    onClose();
  };

  const updateData = (data) => {
    setAppointmentData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div>
      {step === 1 && (
        <ChooseDoctorStep
          service={service}
          onNext={handleNext}
          updateData={updateData}
        />
      )}
      {step === 2 && (
        <ChooseTimeStep
          onNext={handleNext}
          onBack={handleBack}
          updateData={updateData}
        />
      )}
    </div>
  );
};

export default AppointmentPopup;
