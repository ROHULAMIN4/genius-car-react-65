import React, { useEffect, useState } from "react";

const ManageSerives = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const uri = `http://localhost:5000/services/${id}`;
    fetch(uri, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted Successfully");
          const remainig = Services.filter((service) => service._id !== id);
          setServices(remainig);
        }
      });
  };
  return (
    <div>
      <h3>Manage services </h3>
      {Services.map((service) => (
        <div key={service._id}>
          <h4>{service.name}</h4>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageSerives;
