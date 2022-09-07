import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleSwitch from './toggle-switch';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: true
    };
  }

  render() {
    return <ToggleSwitch />;
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<MainContainer />);
