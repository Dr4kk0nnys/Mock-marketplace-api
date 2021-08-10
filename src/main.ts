import express from 'express';
import cors from 'cors';

/* Configs */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routes */
import register from 'routes/register';

/* Using routes */
app.use('/register', register);


app.listen(8080, () => console.log('Listening on port 8080.'));