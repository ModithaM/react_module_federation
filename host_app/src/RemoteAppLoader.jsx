import React from "react";

const RemoteApp = React.lazy(() => 
  Promise.resolve().then(async () => {
    return import("remoteApp/./App");
  })
);

export default RemoteApp;
