import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


export default function DoctorCard({ doctor }) {

  return (
    <>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray">
          <img
            className="relative h-56 w-full"
            src={import.meta.resolve(`../../doctors/${doctor.nom}.jpg`)}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {doctor.nom}
          </Typography>
          <Typography>
            {doctor.detail}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Button</Button>
        </CardFooter>
      </Card>

    </>
  );
}