/**
 * Created by moyu on 2017/2/25.
 */
import CommentList from './CommentListState'

const stores =  {
    comments: new CommentList()
}

stores.comments.fetch();

export default stores;