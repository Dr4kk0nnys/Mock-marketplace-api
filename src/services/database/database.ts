import User from "models/userModel";

const database: User[] = [];

const append = ({ email, password } : User) => {
    if (database.some((user) => user.email === email)) throw new Error('This email already exists.');

    database.push({ email, password });
}

const read = () => database;


export { append, read }