import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//  Mount function to start up the app,
const mount = (el) => {
  ReactDOM.render(<App />, el);
};
// If we are in development mode and in isolation, use the dev server
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

//  we are running through container and we should export the mount function
export { mount };
