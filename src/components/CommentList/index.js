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
        // alert('willmount');
    }

    componentDidMount() {
        // alert('didmount');
    }

    componentWillReceiveProps(newProps) {
        // alert('receive');
    }

    componentWillUpdate(newProps, newState, newContext) {
        // alert('willupdate');
    }

    componentDidUpdate(oldProps, oldState, oldContext) {
        // alert('didupdate');
    }

    componentWillUnmount() {
        // alert('unmount');
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
                {comments && comments.get().map((comment, index) =>
                    <Comment key={index} store={comment} onDelete={() => {comments.del(index)} }/>
                )}
            </ul>
        )
    }
}

export default CommentList
