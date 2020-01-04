import React from "react";
import Message from "app/components/ui/Message";

const text = "Oops! We couldn't find what you was looking for.";

const NotFound = () => <Message color="yellow" icon="search" text={text} />;

export default NotFound;
