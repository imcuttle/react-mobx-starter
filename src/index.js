import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';

import MainPage from 'pages/MainPage'

const reRender = (Root=App) => {
    render(
        <Root >
            <MainPage />
        </Root>,
        document.getElementById('root')
    );
};

reRender(App);


if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        reRender(NextApp);
    });
}
