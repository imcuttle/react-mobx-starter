/**
 * Created by moyu on 2017/2/25.
 */
import {observable, computed, action, useStrict, toJS} from 'mobx';
import CommentState from './Comment';

useStrict(true);
class CommentListState {
    @observable comments = [new CommentState({author: 'auth', date: 'date', content: 'content'})];

    toJSON() {
        return toJS(this.comments);
    }
    constructor(comments) {
        if (comments) {
            this.set(comments);
        }
    }

    get() {
        return this.comments;
    }

    @action del(index) {
        this.comments.splice(index, 1);
    }

    @action set(list) {
        this.comments = list.map(x => new CommentState(x))
    }

    @action fetch() {
        setTimeout(() => {
            this.push([{author: 'John', date: '123', content: 'hahahaha'}]);
        }, 1000);
    }

    @action push(list) {
        this.comments.push(...new CommentListState(list).comments);
    }

}

export default CommentListState;