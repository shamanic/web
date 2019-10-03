import React from 'react';
import {hydrate} from 'react-dom';
import './css/index.css';
import App from './App';

hydrate(<App />, document.getElementById('root'));

