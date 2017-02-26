import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Router from './router';
import stores from 'models';
import {observer, extendObservable, Provider} from 'mobx-react';


const reRender = (Root=Router) => {
    console.log(Root);
    render(
        <Provider {...stores}>
            {Root}
        </Provider>,
        document.getElementById('root')
    );
};

reRender(Router);


if (module.hot) {
    module.hot.accept('./router', () => {
        const NextApp = require('./router').default;
        reRender(NextApp);
    });
}
