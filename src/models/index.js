/**
 * Created by moyu on 2017/2/25.
 */
import CommentList from './Comments';
import {observable, computed, action, useStrict, toJS} from 'mobx';

useStrict(true);
class Store {
    comments = new CommentList();

    constructor() {

    }

    fetch() {
        this.comments.fetch();
    }

    get() {
        return {
            comments: this.comments
        }
    }
}

const store = new Store();
store.fetch();

export default store;