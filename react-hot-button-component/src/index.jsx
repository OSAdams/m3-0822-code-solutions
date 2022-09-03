import React from 'react';
import ReactDOM from 'react-dom/client';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

const element = <MainContainer />;
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(element);
