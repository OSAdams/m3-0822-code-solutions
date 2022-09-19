import React from 'react';
import ReactDOM from 'react-dom/client';

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>Hello World</h1>
      </div>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
