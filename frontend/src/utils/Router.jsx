import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Container />} /> */}
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
};

export default Router;
