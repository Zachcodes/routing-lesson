import React from 'react';
import petsData from '../petsData';

export default function Pet(props) {
  let selectedPet = petsData.find(p => p.id === +props.match.params.id);
  return (
    <div>
      <h1>{selectedPet.name}</h1>
      <p>{selectedPet.type}</p>
    </div>
  );
}
