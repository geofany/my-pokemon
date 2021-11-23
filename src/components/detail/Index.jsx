import React from 'react';
import Breadcrumb from './Breadcrumb'
import { useParams } from 'react-router';
import Card from './Card';


function Index(props) {
  let urlParams = useParams();

  return (
    <div className={`flex flex-col gap-4 max-w-4xl mx-3 md:mx-auto py-10`}>
      <Breadcrumb name={urlParams.pokemonName} />
      <Card />
    </div>
  )
}

export default Index
