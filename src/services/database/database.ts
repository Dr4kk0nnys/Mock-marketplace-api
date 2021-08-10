const database = {};

const append = (key: string, value: any) => {
    if (database[key]) throw new Error('This key already exists.');

    database[key] = value;
}

const read = () => Object.freeze(database);


export { append, read }