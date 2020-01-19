import { User } from './User.model';
import { Post } from './post.model';

export class Comment {
    id: string;
    text: string;
    user: User;
    postId: string;
}
