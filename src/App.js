import { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import TestApi from './components/TestApi';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Pokedex from './components/pokedex/Index';
// import Detail from './components/detail/Index';
// import MyPokemon from './components/mypokemon/Index';

function App() {

  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta'
  });




  const [menuActive, setmenuActive] = useState('pokedex');
  const [detail, setDetail] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <ApolloProvider client={client}>
      <div className="flex flex-col h-screen w-screen">
        <Header
          menuActive={menuActive}
          setmenuActive={setmenuActive}
          setDetail={setDetail}
        />
        <main className="flex-1 overflow-hidden">
          <div className="overflow-auto h-full">
            <Pokedex
              menuActive={menuActive}
              setmenuActive={setmenuActive}
              detail={detail}
              setDetail={setDetail}
              setSelected={setSelected}
            />
          </div>
        </main>
        <Footer />
      </div>
    </ApolloProvider>

    // <div className="flex flex-col h-screen w-screen">
    //   <Header
    //     menuActive={menuActive}
    //     setmenuActive={setmenuActive}
    //     setDetail={setDetail}
    //   />
    //   <main className="flex-1 overflow-hidden">
    //     <div className="overflow-auto h-full">
    //       <Pokedex
    //         menuActive={menuActive}
    //         setmenuActive={setmenuActive}
    //         pokemon={pokemon}
    //         detail={detail}
    //         setDetail={setDetail}
    //         setSelected={setSelected}
    //       />
    //       <Detail
    //         menuActive={menuActive}
    //         setmenuActive={setmenuActive}
    //         detail={detail}
    //         setDetail={setDetail}
    //         selected={selected}
    //         setSelected={setSelected}
    //       />
    //       <MyPokemon
    //         menuActive={menuActive}
    //         setmenuActive={setmenuActive}
    //         pokemon={pokemon}
    //         setDetail={setDetail}
    //         setSelected={setSelected}
    //       />
    //     </div>
    //   </main>
    //   <Footer />
    // </div>
  );
}

export default App;
