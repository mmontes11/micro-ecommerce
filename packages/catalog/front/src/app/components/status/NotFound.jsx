import React from "react";
import httpStatus from "http-status";
import Status from "app/components/status/Status";

const NotFound = () => <Status status={httpStatus.NOT_FOUND} />;

export default NotFound;
