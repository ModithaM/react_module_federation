import React from "react";
import { ContainerApp } from "./components/ContainerApp";

const AppOne = React.lazy(() => import("app1/AppOne"));

const App = () => (
  <>
    <div>
      <h1>HOST APP</h1>

      <React.Suspense fallback={<div>Loading remote...</div>}>
        <ContainerApp
          AppOne={AppOne}
        />
      </React.Suspense>
    </div>
  </>
);

export default App;
