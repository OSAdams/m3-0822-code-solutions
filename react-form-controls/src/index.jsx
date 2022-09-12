import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistrationForm from './registration-form';

class Main extends React.Component {

  render() {
    return <RegistrationForm />;
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
