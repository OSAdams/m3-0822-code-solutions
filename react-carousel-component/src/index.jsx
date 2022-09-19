import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from '../components/carousel';
import imagesData from '../data/det-lions.json';

class Main extends React.Component {
  render() {
    return (
      <div className='main flex'>
        <Carousel imgData={ imagesData.images } />
      </div>
    );
  }
}

const element = <Main />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
