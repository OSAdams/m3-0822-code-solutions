import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from '../components/accordion-component';
import loremIpsums from '../data/lorem-ipsums';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null
    };
  }

  render() {
    return (
      <div className="main">
        <Accordion data={ loremIpsums } />
      </div>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
