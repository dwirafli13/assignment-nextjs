import React from "react";

const Time = ({ data }) => {
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.todo}</p>
    </div>
  );
};

export default Time;
