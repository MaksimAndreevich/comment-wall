import React, { useEffect } from 'react';
import MainLayout from './components/MainLayout';
import { StoresProvider, stores, useStore } from './stores';

function App() {
  const store = useStore('mainStore');

  useEffect(() => {
    const bootstrap = async () => {
      await store.init();
    };
    bootstrap();
  });

  return (
    <>
      <StoresProvider value={stores}>
        <MainLayout />
      </StoresProvider>
    </>
  );
}

export default App;
