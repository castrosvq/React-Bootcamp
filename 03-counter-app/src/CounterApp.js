import React from "react";
import ProtoTypes from "prop-types";

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
    </>
  );
};

CounterApp.protoTypes = {
  value: ProtoTypes.number,
};

export default CounterApp;
