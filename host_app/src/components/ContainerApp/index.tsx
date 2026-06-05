import React from "react";

type ContainerAppProps = {
  AppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  AppOne,
}: ContainerAppProps) => {
  return (
    <AppOne />
  );
};
