import React from 'react';
import ListGenerator from '../util/list-generator';
import pokeDex from '../data/pokedex';

export default class PokemonComponent extends React.Component {
  render() {
    return <ListGenerator data={ pokeDex } />;
  }
}
