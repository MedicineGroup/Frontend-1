/* eslint-disable react/prop-types */
import { useState } from "react";
import ChooseDoctorStep from "./steps/ChooseDoctorStep";
import ChooseDateStep from "./steps/ChooseDateStep";
import ChooseTimeStep from "./steps/ChooseTimeStep";
import axios from "axios";
import { useAuthContext } from "../../store/auth-context";
import { API_ROUTES } from "../../utils/routes";
import { useMutation } from "@tanstack/react-query";

const AppointmentPopup = ({ onClose, service }) => {
  const [step, setStep] = useState(1);
  const { jwtToken } = useAuthContext();
  const [appointmentData, setAppointmentData] = useState({
    selectedDoctor: {},
    selectedDate: null,
    selectedTime: "",
  });

  const saveConsultation = () => {
    return axios.post(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.SaveConsultation}`,
      {
        date: appointmentData.selectedDate,
        state: "Waiting Approval",
        startTime: appointmentData.selectedTime,
        duration: 30,
        doctor: appointmentData.selectedDoctor,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  };

  const saveConsultationMutation = useMutation({
    mutationKey: ["save-consultation"],
    mutationFn: saveConsultation,
    onSuccess: (data) => {
      console.log(data);
      onClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    await saveConsultationMutation.mutateAsync();
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
        <ChooseDateStep
          selectedDoctor={appointmentData.selectedDoctor}
          onNext={handleNext}
          onBack={handleBack}
          updateData={updateData}
        />
      )}
      {step === 3 && (
        <ChooseTimeStep
          onBack={handleBack}
          onSubmit={handleSubmit}
          appointmentData={appointmentData}
          updateData={updateData}
          loading={saveConsultationMutation.isPending}
        />
      )}
    </div>
  );
};

export default AppointmentPopup;
