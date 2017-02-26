import React from 'react'
import CommentList from 'components/CommentList';
import {observer} from 'mobx-react';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps(newProps) {}
    componentWillUpdate(newProps, newState, newContext) {}
    componentDidUpdate(oldProps, oldState, oldContext) {}
    componentWillUnmount() {}
    static defaultProps = {}
    state = {}
    static propTypes = {}
    render() {
        return (
            <main>
                <CommentList />
            </main>
        )
    }
}

export default MainPage;