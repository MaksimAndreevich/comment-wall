import React from "react";
import MainLayout from "./components/MainLayout";
import { StoresProvider, stores } from "./stores";

function App() {
  return (
    <>
      <StoresProvider value={stores}>
        <MainLayout />
      </StoresProvider>
    </>
  );
}

export default App;
