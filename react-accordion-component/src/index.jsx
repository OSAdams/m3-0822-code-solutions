import React from 'react';
import ReactDOM from 'react-dom/client';
import ListGenerator from '../util/list-generator-component';
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
        <ListGenerator data={ loremIpsums } />
      </div>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
