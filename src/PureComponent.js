import React, { memo, useState } from "react";

const EmployeeDetail = memo(({ name }) => {
  console.log("Hiiii");
  return (
    <>
      <p>
        Name: <b>{name}</b>
      </p>
      <p>
        Name: <b></b>
      </p>
    </>
  );
});

const Employee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <label>
        Name:
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <EmployeeDetail name={name} />
    </>
  );
};
export default Employee;
