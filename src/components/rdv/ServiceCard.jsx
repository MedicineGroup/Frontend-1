import { TERipple } from 'tw-elements-react';
import {
  DialogHeader, 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Modal from '../shared/Modal.jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import DoctorsList from './DoctorsList.jsx';


export default function ServiceCard({ service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
     <Card className="mt-6 w-96">
      <CardHeader color="blue-gray">
        <img 
          className="relative h-56 w-full"
          src={import.meta.resolve(`../../images/${service.nom}.jpeg`)}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {service.nom}
        </Typography>
        <Typography>
          {service.detail}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={closeModal}>Doctors</Button>
      </CardFooter>
    </Card>
        <Modal
          isOpen={isModalOpen}
          handleClose={closeModal}
        >
          <DialogHeader className="flex flex-row justify-between">
            <p>Doctors</p>
            <XMarkIcon
              onClick={closeModal}
              className="h-6 w-6 cursor-pointer"
            />
          </DialogHeader>
          <DoctorsList service={service.nom} />
        </Modal>
    </>
  );
}
