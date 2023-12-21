/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Radio,
} from "@material-tailwind/react";

export default function DoctorCard({ doctor, onSelectDoctor }) {
  const handleSelect = () => {
    // Inform the parent component about the selected doctor
    onSelectDoctor(doctor);
  };
  return (
    <>
      <Card className="mt-6">
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
          <Radio name="doctors" color="blue" onClick={handleSelect} />
        </CardFooter>
      </Card>
    </>
  );
}
