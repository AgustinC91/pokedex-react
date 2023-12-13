import React from "react";
import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./context/PokemonProvider";

const App = () => {
  return (
    <PokemonProvider
      value={{
        numero: 0,
      }}
    >
      <AppRouter />
    </PokemonProvider>
  );
};

export default App;
