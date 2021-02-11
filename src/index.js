// == Import : npm
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
// == Import : local
import App from 'src/containers/App';
import store from 'src/store';
import 'src/styles/main.scss';

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = <Provider store={store}><Router><App /></Router></Provider>;

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(rootComponent, target);