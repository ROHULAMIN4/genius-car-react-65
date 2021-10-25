import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const [user, setUser] = useState({});
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h4>Product name: {user.name}</h4>
      <h5>product Id: {serviceId}</h5>
      <p>Details of product: {user.description}</p>
    </div>
  );
};

export default Booking;
