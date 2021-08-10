import express from 'express';

/* Configs */
const app = express();
app.use(express.json());


/* Routes */
import register from 'routes/register';

/* Using routes */
app.use('/register', register);


app.listen(8080, () => console.log('Listening on port 8080.'));