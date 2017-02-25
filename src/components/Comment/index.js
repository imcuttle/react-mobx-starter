import React from 'react'
import css from './style.scss'

import {observer} from 'mobx-react';

@observer
class Comment extends React.Component {
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
      const {author, date, content, text} = this.props.store;
      const {onDelete} = this.props;

      return (
        <div className={css.main}>
            <div className={css.content}>{content}</div>
            <p>{text}</p>
            <span className={css.info}>{author}<time>{date}</time></span>
            <button onClick={onDelete}>Delete</button>
        </div>
      )
    }
    onDelete() {
    }
}

export default Comment;
