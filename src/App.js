import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, Routes } from 'react-router';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Pokedex from './components/pokedex/Index';
import Detail from './components/detail/Index';
import MyPokemon from './components/mypokemon/Index';
import PokemonContextProvider from './contexts/PokemonContext';

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  });

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <ApolloProvider client={client}>
        <main className="flex-1 overflow-hidden">
          <div className="overflow-auto h-full">
            <Routes>
              <Route index path='/' element={
                <Pokedex />
              }
              />
              <Route path=':pokemonName' element={
                <PokemonContextProvider>
                  <Detail />
                </PokemonContextProvider>
              }
              />
              <Route path='/mypokemon' element={
                <PokemonContextProvider>
                  <MyPokemon />
                </PokemonContextProvider>
              }
              />
            </Routes>
          </div>
        </main>
      </ApolloProvider>
      <Footer />
    </div >
  );
}

export default App;
