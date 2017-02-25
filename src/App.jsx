import React, {Component} from 'react';
import {observer, extendObservable, Provider} from 'mobx-react';
import {isDevMode} from '_utils';
import DevTools from 'mobx-react-devtools';
import stores from 'models';

class App extends Component {
    render() {
        const {children, store, ...rest} = this.props;
        return (
            <Provider {...stores}>
                <div>
                {
                    React.Children.map(children, (child, index) =>
                        React.cloneElement(child, ...rest)
                    )
                }
                { isDevMode && <DevTools /> }
                </div>
            </Provider>
        );
    }
}

export default App;
