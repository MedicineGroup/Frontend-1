import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../utils/routes.js";
import { useAuthContext } from "../../store/auth-context.jsx";
import axios from "axios";
import ServiceCard from "./ServiceCard.jsx";
import { Spinner } from "@material-tailwind/react";
const ServicesList = () => {
  const { jwtToken } = useAuthContext();
  const getAllServices = () => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.GetServices}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-servicess"],
    queryFn: getAllServices,
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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.data.services.map((service) => (
        <ServiceCard key={service._id} service={service}/>
      ))}
      </div>
    </div>
  )
}

export default ServicesList