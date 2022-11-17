import React, { useEffect } from "react";
import MainLayout from "./components/MainLayout";
import { StoresProvider, stores, useStore } from "./stores";

function App() {
  const store = useStore("mainStore");

  useEffect(() => {
    async function init() {
      await store.init();
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StoresProvider value={stores}>
        <MainLayout />
      </StoresProvider>
    </>
  );
}

export default App;
