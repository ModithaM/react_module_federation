import React from "react";

const RemoteApp = React.lazy(() => import("remoteApp/./App"));

export default function App() {
  return (
    <div>
      <h1>HOST APP</h1>

      <React.Suspense fallback={<div>Loading remote...</div>}>
        <RemoteApp />
      </React.Suspense>
    </div>
  );
}
