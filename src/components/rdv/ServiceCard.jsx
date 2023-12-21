/* eslint-disable react/prop-types */
import {
  DialogHeader,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Modal from "../shared/Modal.jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AppointmentPopup from "./AppointmentPopup.jsx";

export default function ServiceCard({ service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Card className="mt-6">
        <CardHeader color="blue-gray">
          <img
            className="relative h-56 w-full"
            src={service.thumbnailImage}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {service.name}
          </Typography>
          <Typography>{service.detail}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-primary" onClick={closeModal}>
            Doctors
          </Button>
        </CardFooter>
      </Card>
      <Modal size={"xl"} isOpen={isModalOpen} handleClose={closeModal}>
        <DialogHeader className="flex flex-row justify-between">
          <p>Appointment</p>
          <XMarkIcon onClick={closeModal} className="h-6 w-6 cursor-pointer" />
        </DialogHeader>
        <AppointmentPopup service={service.name} />
      </Modal>
    </>
  );
}
