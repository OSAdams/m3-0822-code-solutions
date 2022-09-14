import React from 'react';
import ReactDOM from 'react-dom/client';

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
        <h3>hello world</h3>
      </div>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
