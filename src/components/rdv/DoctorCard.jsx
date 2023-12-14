/* eslint-disable react/prop-types */
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
      <Card className="mt-6">
        <CardHeader color="blue-gray">
          <img
            className="relative h-56 w-full"
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
        <CardFooter className="pt-0">
          <Button>Button</Button>
        </CardFooter>
      </Card>
    </>
  );
}
