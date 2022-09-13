import React from 'react';
import ReactDOM from 'react-dom/client';
import FormComponent from './form-component';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null
    };
  }

  render() {
    return (
      <>
        <FormComponent />
      </>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
