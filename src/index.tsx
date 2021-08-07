import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './assets/fonts/Minecraft.ttf'

let whiteList = [
  'localhost',
  'bedrocklauncher.github.io'
]

if(!whiteList.includes(window.top.location.hostname)) {
  window.close()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)