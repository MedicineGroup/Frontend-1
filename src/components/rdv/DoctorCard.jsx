/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function DoctorCard({ doctor, children }) {
  return (
    <>
      <Card className="mt-1 ">
        <CardHeader color="blue-gray">
          <img
            className="relative"
            src={doctor.image || "/assets/profile-placeholder.jpg"}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {doctor.nom}
          </Typography>
          <Typography>{doctor.detail}</Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center w-full">
          {children}
        </CardFooter>
      </Card>
    </>
  );
}
