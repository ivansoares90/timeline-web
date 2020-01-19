import { Comment } from './Comment.model';
import { User } from './User.model';


export class Post  {
    id: string;
    text: string;
    comments: Comment[];
    user: User;

}
