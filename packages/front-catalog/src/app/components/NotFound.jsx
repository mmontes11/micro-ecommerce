import React from "react";
import Status from "app/components/Status";

const NotFound = () => (
  <Status code={404}>
    <p>Sorry, can’t find that.</p>
  </Status>
);

export default NotFound;
