import { append as appendPost, read as readPosts } from './database/posts';
import { append as appendUsers, read as readUsers } from './database/users';

export default { appendPost, readPosts, appendUsers, readUsers }