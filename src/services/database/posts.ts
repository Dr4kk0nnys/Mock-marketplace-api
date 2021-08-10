import Post from "models/postModel";

const database: Post[] = [];

const append = ({ ownersEmail, title, description, images, price } : Post) => {

    const newPost = new Post(ownersEmail, title, description, images, price);
    database.push(newPost);
}

const read = () => database;


export { append, read }