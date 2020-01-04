import React from "react";
import Message from "app/components/ui/Message";

const text = "Ouch! Houston we have a problem.";

const ServerError = () => <Message color="red" icon="bug" text={text} />;

export default ServerError;
