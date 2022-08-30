import React from 'react';
import ReactDOM from 'react-dom/client';

const helloWorld = React.createElement('h1', null, 'Hello React!');
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(helloWorld);

console.log('helloWorld:', helloWorld);
console.log('container:', container);
console.log('root:', root);
