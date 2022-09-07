import React from 'react';
import ReactDOM from 'react-dom/client';
import StopWatch from './stopwatch-component';

class Main extends React.Component {
  render() {
    return (
      <>
        <StopWatch />
      </>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
