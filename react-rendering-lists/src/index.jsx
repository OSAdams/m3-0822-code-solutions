import React from 'react';
import ReactDOM from 'react-dom/client';
import PokemonComponent from '../component/pokemon-component';

class Main extends React.Component {
  render() {
    return (
      <>
        <PokemonComponent />
      </>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
