import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Consultation Date", "Doctor", "Service", "State", ""];

function DossierMedical() {
  const [consultations, setConsultations] = useState([]);
  const userDataString=localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);
  // Now, userData is an object, and you can access the email property
  const email = userData.email;
  console.log('Email:', email);

  useEffect(() => {
    // Récupérer le token du local storage
  const token = localStorage.getItem("token");

  // Configurer l'en-tête avec le token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    // Fetch data from the API using Axios
    axios
      .get(`http://localhost:8888/user/consultations?email=${email}`, config)
      .then((response) => setConsultations(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {consultations.map(({ _id, date, doctor, service, state }) => {
            return (
              <tr key={_id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {new Date(date).toLocaleDateString()}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {doctor}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {service}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {state}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default DossierMedical;
