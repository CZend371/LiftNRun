import React from 'react';
import { render } from 'react-dom';

import { App } from './App/';

// setup fake backend
import { configureMockBackend } from './components/Login/helpers/MockBackend';
configureMockBackend();

render(
    <App />,
    document.getElementById('app')
);