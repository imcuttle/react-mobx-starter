/**
 * Created by moyu on 2017/2/25.
 */
import {observable, computed, action, useStrict} from 'mobx';
import CommentState from './Comment';

useStrict(true);

class CommentListState {

    @observable comments = [];

    constructor(comments=[]) {
        this.comments = comments.map(comment => new CommentState(comment));
    }

    @action del(index) {
        this.comments.splice(index, 1);
    }



    @action fetch() {
        setTimeout(() => {
            this.comments = new CommentListState([{author: 'John', date: '123', content: 'hahahaha'}]).comments
        }, 1000);
    }

    @action push(list) {
        this.comments.push(...new CommentListState(list).comments);
    }

}

export default CommentListState;