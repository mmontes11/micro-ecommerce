import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const Status = ({ status }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = status;
      return null;
    }}
  />
);

Status.propTypes = {
  status: PropTypes.number.isRequired,
};

export default Status;
