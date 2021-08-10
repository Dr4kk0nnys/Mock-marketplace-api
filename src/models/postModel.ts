class Post {

    ownersEmail: string;
    title: string;
    description: string;
    images: null;
    price: number;
    getPostId?: () => string;

    constructor(ownersEmail: string, title: string, description: string, images: null, price: number) {
        this.ownersEmail = ownersEmail;
        this.title = title;
        this.description = description;
        this.images = images;
        this.price = price;
        this.getPostId = () => this.ownersEmail;
    }
}

export default Post;