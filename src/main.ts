import express from 'express';
import cors from 'cors';

/* Configs */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routes */
import register from 'routes/register';
import post from 'routes/post';

/* Using routes */
app.use('/register', register);
app.use('/post', post);


app.listen(8080, () => console.log('Listening on port 8080.'));