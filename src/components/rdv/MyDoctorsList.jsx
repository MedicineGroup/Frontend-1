/* eslint-disable react/prop-types */

import { Spinner, Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../utils/routes.js";
import { useAuthContext } from "../../store/auth-context.jsx";
import axios from "axios";
import DoctorCard from "./DoctorCard.jsx";
import { useState } from "react";
import Modal from "../shared/Modal.jsx";
import { DialogHeader } from "@material-tailwind/react";
import AppointmentPopup from "./AppointmentPopup.jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MyDoctorsList = () => {
  const { jwtToken } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getMyDoctors = () => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.GetUserDoctors}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-user-doctors"],
    queryFn: getMyDoctors,
  });
  if (isLoading) {
    return (
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner className=" h-7 w-7" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className=" text-red-700 font-semibold">
          Something went wrong! Please refresh the page
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 gap-4">
      {data.data.doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor}>
          <Button className="bg-primary" onClick={handleOpenModal}>
            Schedule Appointment
          </Button>
          <Modal isOpen={isModalOpen} handleClose={handleOpenModal}>
            <DialogHeader className="flex flex-row justify-between">
              <p>Appointment</p>
              <XMarkIcon
                onClick={handleOpenModal}
                className="h-6 w-6 cursor-pointer"
              />
            </DialogHeader>
            <AppointmentPopup doctor={doctor._id} onClose={handleOpenModal} />
          </Modal>
        </DoctorCard>
      ))}
    </div>
  );
};

export default MyDoctorsList;
