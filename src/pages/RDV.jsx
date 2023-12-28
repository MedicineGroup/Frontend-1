import MyDoctorsList from "../components/rdv/MyDoctorsList";
import ServicesList from "../components/rdv/ServicesList";
const Rdv = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="mb-2 text-2xl font-semibold">Your doctors:</h1>
        <MyDoctorsList />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="mb-2 text-2xl font-semibold">All services:</h1>
        <ServicesList />
      </div>
    </div>
  );
};

export default Rdv;
