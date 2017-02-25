import React from 'react';
import {observer, inject} from 'mobx-react';
import {extendObservable, toJS} from 'mobx';
import css from './style.scss';
import Comment from '../Comment';


@inject('comments') @observer
class CommentList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillUpdate(newProps, newState, newContext) {
    }

    componentDidUpdate(oldProps, oldState, oldContext) {
    }

    componentWillUnmount() {
    }

    static defaultProps = {
        comments: []
    }
    state = {}
    static propTypes = {}

    render() {
        const {comments} = this.props;
        return (
            <ul className={css.main}>
                {comments && comments.comments.map((comment, index) =>
                    <Comment key={index} store={comment} onDelete={() => {comments.del(index)} }/>
                )}
            </ul>
        )
    }
}

export default CommentList
