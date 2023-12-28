/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ChooseDoctorStep from "./steps/ChooseDoctorStep";
import ChooseDateStep from "./steps/ChooseDateStep";
import ChooseTimeStep from "./steps/ChooseTimeStep";
import axios from "axios";
import { useAuthContext } from "../../store/auth-context";
import { API_ROUTES } from "../../utils/routes";
import { useMutation } from "@tanstack/react-query";

const AppointmentPopup = ({ onClose, service, doctor }) => {
  const [step, setStep] = useState(1);
  const { jwtToken } = useAuthContext();
  const [error, setError] = useState();
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

  useEffect(() => {
    if (doctor) {
      appointmentData.selectedDoctor = doctor;
      setAppointmentData(appointmentData);
    }
  }, [doctor, appointmentData]);

  useEffect(() => {
    if (doctor) setStep(2);
  }, [doctor]);

  const saveConsultationMutation = useMutation({
    mutationKey: ["save-consultation"],
    mutationFn: saveConsultation,
    onSuccess: (data) => {
      console.log(data);
      onClose();
    },
    onError: (error) => {
      console.log(error);
      setError({
        message: error.response.data.message || "Something went wrong",
      });
    },
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setError(null);
    await saveConsultationMutation.mutateAsync();
  };

  const updateData = (data) => {
    setAppointmentData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div>
      {step === 1 && service && (
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
          error={error}
        />
      )}
    </div>
  );
};

export default AppointmentPopup;
