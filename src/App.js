import "./App.css";
// import React, { useState } from "react";
import Table from "./components/Table/Table";

import router from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Table />
    </div>
  );
}

export default App;
