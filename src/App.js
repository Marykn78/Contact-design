import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table/Table";


function App() {
  const [users, setusers] = useState([
    {
      id: 1,
      name: "mina",
      email: "mina@gmail.com",
      phone: "308271",
      age: 24,
      favorit: true,
    },
    {
      id: 2,
      name: "saeid",
      email: "saeid@gmail.com",
      phone: "564390",
      age: 32,
      favorit: false,
    },
    {
      id: 3,
      name: "paniz",
      email: "paniz@gmail.com",
      phone: "823174",
      age: 18,
      favorit: true,
    },
  ]);

  return (
    <div>
      <Table users={users} setusers={setusers} />
    </div>
  );
}

export default App;
