/* eslint-disable react/prop-types */

import { Spinner, Radio } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../utils/routes.js";
import { useAuthContext } from "../../store/auth-context.jsx";
import axios from "axios";
import DoctorCard from "./DoctorCard.jsx";

const DoctorsList = ({ service, onSelectDoctor }) => {
  const { jwtToken } = useAuthContext();
  const getAllDoctorsByService = () => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}${
        API_ROUTES.GetDoctors
      }?service=${service}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-doctors"],
    queryFn: getAllDoctorsByService,
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
          <Radio
            className=" border-2 border-black"
            name="doctors"
            color="blue"
            onClick={() => onSelectDoctor(doctor)}
          />
        </DoctorCard>
      ))}
    </div>
  );
};

export default DoctorsList;
