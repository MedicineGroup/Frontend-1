import React from 'react';
import { TERipple } from 'tw-elements-react';
import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../utils/routes.js";
import { useAuthContext } from "../../store/auth-context.jsx";
import axios from "axios";

export default function DoctorCard() {
    const { jwtToken } = useAuthContext();

  const getAllDoctorsByServiceId = () => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.GetDoctors}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-doctors"],
    queryFn: getAllDoctorsByServiceId,
  });
  console.log("Data:", data);
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

  if (!data || !data.data || !Array.isArray(data.data.doctors) || data.data.doctors.length === 0) {
    console.log("No valid doctors data:", data);
    return (
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className=" font-semibold">You have no previous doctors</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.data.doctors.map((doctor) => (
        <div key={doctor._id} className="block w-96 rounded-lg bg-white shadow-[0_2px_10px_-2px_rgba(0,0,0,0.07),0_8px_16px_-1px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <img
              className="rounded-t-lg w-full h-64 object-cover"
              src={import.meta.resolve(`../../doctors/${doctor.nom}.jpg`)}
              alt={doctor.nom || "Doctor Image"}
            />
          <div className="p-4">
            <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {doctor.nom || "Doctor Name"}
            </h5>
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
              {doctor.detail || "Doctor Description"}
            </p>
            <TERipple>
              <button
                type="button"
                className="inline-block rounded bg-primary px-4 py-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_2px_5px_-2px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_9px_-1px_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_9px_-1px_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_9px_-1px_rgba(59,113,202,0.2)] dark:shadow-[0_2px_5px_-2px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_9px_-1px_rgba(59,113,202,0.1)] dark:focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_9px_-1px_rgba(59,113,202,0.1)] dark:active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_9px_-1px_rgba(59,113,202,0.1)]"
              >
                Button
              </button>
            </TERipple>
          </div>
        </div>
      ))}
    </div>
  );
}