import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer-component';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHodler: null
    };
  }

  render() {
    return (
      <>
        <AppDrawer />
      </>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
