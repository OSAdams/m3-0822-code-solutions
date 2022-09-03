import React from 'react';
import ReactDOM from 'react-dom/client';
import HotButton from './hot-button';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <HotButton />
      </div>
    );
  }
}

const element = <MainContainer />;
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(element);
