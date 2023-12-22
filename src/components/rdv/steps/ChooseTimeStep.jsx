/* eslint-disable react/prop-types */
import { Button, Radio, Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { useAuthContext } from "../../../store/auth-context";
import axios from "axios";
import { API_ROUTES } from "../../../utils/routes";
import { useQuery } from "@tanstack/react-query";

const ChooseTimeStep = ({
  onBack,
  updateData,
  onSubmit,
  loading,
  appointmentData,
}) => {
  const { jwtToken } = useAuthContext();
  const [selectedTime, setSelectedTime] = useState(null);
  const listOfTimes = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
  ];
  const getBookedTimes = () => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}${
        API_ROUTES.GetFullyBookedTimes
      }?doctorId=${appointmentData.selectedDoctor}&date=${
        appointmentData.selectedDate
      }`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  };

  const handleConfirm = () => {
    updateData({ selectedTime });
    onSubmit();
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["get-booked-times"],
    queryFn: getBookedTimes,
  });

  if (isLoading) {
    return (
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner className=" h-7 w-7" />
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className=" text-red-700 font-semibold">
          Something went wrong! Please refresh the page
        </p>
      </div>
    );
  }

  const bookedTimes = new Set(data.data.bookedTimes);
  return (
    <div className="h-[80vh] flex flex-col justify-between items-center">
      <h2 className="mb-3 text-center font-semibold text-lg">
        Step 3: Select a Time
      </h2>
      <div className=" grid grid-cols-4 gap-3">
        {listOfTimes.map((time) => {
          return (
            <Radio
              key={time}
              disabled={bookedTimes.has(time)}
              className=" border-2 border-black"
              label={time}
              name="timePicker"
              onClick={() => setSelectedTime(time)}
            />
          );
        })}
      </div>
      <div className="flex flex-row w-full justify-between px-2">
        <Button className="bg-primary my-4" onClick={onBack}>
          Back
        </Button>
        <Button
          disabled={loading || !selectedTime}
          className="bg-primary my-4"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ChooseTimeStep;
