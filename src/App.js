import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table/Table";
import Search from "./components/Search/Search";

function App() {
  const [users, setusers] = useState([
    {
      id: 1,
      name: "mina",
      email: "mary@gmail.com",
      phone: "338877",
      age: 24,
      favorit: true,
    },
    {
      id: 2,
      name: "saeid",
      email: "mary@gmail.com",
      phone: "338877",
      age: 24,
      favorit: false,
    },
    {
      id: 3,
      name: "paniz",
      email: "mary@gmail.com",
      phone: "338877",
      age: 24,
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
