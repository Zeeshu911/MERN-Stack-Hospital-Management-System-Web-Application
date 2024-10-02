import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    axios.get("http://localhost:4000/api/v1/user/doctors")
      .then((response) => {
        console.log("API Response: ", response.data);
        setDoctors(response.data.doctor); // Assuming the array is in `response.data.doctor`
      })
      .catch((error) => {
        console.error("Error fetching doctors: ", error);
      });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={element.docAvatar?.url}
                  alt={`${element.firstname} ${element.lastname}'s avatar`}
                />
                <h4>{`${element.firstname} ${element.lastname}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};
export default Doctors;
