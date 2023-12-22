/* eslint-disable react/prop-types */
import { Button, Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_ROUTES } from "../../../utils/routes";
import { useAuthContext } from "../../../store/auth-context";
import { useState } from "react";
import DatePicker from "react-datepicker";

const ChooseDateStep = ({ onNext, onBack, selectedDoctor, updateData }) => {
  const { jwtToken } = useAuthContext();
  const [selectedDate, setSelectedDate] = useState(null);
  const getFullyBookedDates = () => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}${
        API_ROUTES.GetFullyBookedDates
      }?doctorId=${selectedDoctor}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  };
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fully-booked-dates"],
    queryFn: getFullyBookedDates,
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

  const isDateFullyBooked = (date) => {
    // Implement logic to check if the date is not available
    return !data.data.fullyBookedDates.includes(
      date.toISOString().split("T")[0]
    );
  };

  const handleNext = () => {
    updateData({ selectedDate });
    onNext();
  };

  return (
    <div className=" h-[80vh] flex flex-col justify-between items-center">
      <h2 className="mb-3 text-center font-semibold text-lg">
        Step 2: Select a Date
      </h2>
      <div>
        <DatePicker
          className="border-2 border-primary"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()} // Disable past dates
          filterDate={isDateFullyBooked} // Disable unavailable dates
          placeholderText="Choose a date"
        />
      </div>
      <div className="flex flex-row w-full justify-between px-2">
        <Button className="bg-primary my-4" onClick={onBack}>
          Back
        </Button>
        <Button
          disabled={selectedDate === null}
          className="bg-primary my-4"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChooseDateStep;
