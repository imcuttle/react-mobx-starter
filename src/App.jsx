import React, {Component} from 'react';
import {isDevMode} from '_utils';
import DevTools from 'mobx-react-devtools';
import {Link} from 'react-router';

class App extends Component {
    render() {
        const {children, ...rest} = this.props;
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="/">Index</Link></li>
                        <li><Link to="/comments">Comments</Link></li>
                    </ul>
                </header>
                {
                    React.Children.map(children, (child, index) =>
                        React.cloneElement(child, ...rest)
                    )
                }
                { isDevMode && <DevTools /> }
            </div>
        );
    }
}

export default App;
