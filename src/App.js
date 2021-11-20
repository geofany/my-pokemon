import './App.css';
import { useState } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Pokedex from './components/pokedex/Index';
import Detail from './components/detail/Index';
import MyPokemon from './components/mypokemon/Index';

function App() {

  const [menuActive, setmenuActive] = useState('pokedex');
  const [detail, setDetail] = useState(false);
  const pokemon = [
    {
      id: 1,
      name: 'bulbasaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: ['grass', 'poison'],
      moves: ['razor-wind', 'swords-dance', 'cut', 'bind', 'vine-whip', 'headbutt', 'tackle', 'body-slam']
    },
    {
      id: 2,
      name: 'ivysaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      types: ['grass', 'poison'],
      moves: ['swords-dance', 'cut', 'bind', 'vine-whip', 'headbutt', 'tackle', 'body-slam', 'take-down']
    },
    {
      id: 3,
      name: 'venusaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
      types: ['grass', 'poison'],
      moves: ['swords-dance', 'cut', 'bind', 'vine-whip', 'headbutt', 'tackle', 'body-slam', 'take-down']
    },
    {
      id: 4,
      name: 'charmander',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      types: ['fire'],
      moves: ['mega-punch', 'fire-punch', 'thunder-punch', 'scratch', 'swords-dance', 'cut', 'mega-kick', 'headbutt']
    },
    {
      id: 5,
      name: 'charmeleon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
      types: ['fire'],
      moves: ['mega-punch', 'fire-punch', 'thunder-punch', 'scratch', 'swords-dance', 'cut', 'mega-kick', 'headbutt']
    },
    {
      id: 6,
      name: 'charizard',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      types: ['fire', 'flying'],
      moves: ['mega-punch', 'fire-punch', 'thunder-punch', 'scratch', 'swords-dance', 'cut', 'wing-attack', 'fly']
    }
  ]

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header
        menuActive={menuActive}
        setmenuActive={setmenuActive}
        setDetail={setDetail}
      />
      <div className="flex-1 overflow-hidden">
        <div className="overflow-auto h-full">
          <Pokedex
            menuActive={menuActive}
            setmenuActive={setmenuActive}
            pokemon={pokemon}
            detail={detail}
            setDetail={setDetail}
          >
            A
          </Pokedex>
          <Detail
            menuActive={menuActive}
            setmenuActive={setmenuActive}
            detail={detail}
            setDetail={setDetail}
          >
            BB
          </Detail>
          <MyPokemon
            menuActive={menuActive}
            setmenuActive={setmenuActive}
          >
            C
          </MyPokemon>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
