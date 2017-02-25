/**
 * Created by moyu on 2017/2/25.
 */
import {observable, computed, action} from 'mobx';

export default class CommentState {

    @observable author = "";

    @observable date = "";

    @observable content = "";

    @computed get text () {
        return `${this.author} at ${this.date}: ${this.content}`;
    }

    @action remove() {
        delete this.author;
        delete this.date;
        delete this.content;
        delete this;
    }

    constructor({author, date, content}) {
        this.author = author;
        this.date = date;
        this.content = content;
    }

}