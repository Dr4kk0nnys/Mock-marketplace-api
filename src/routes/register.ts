import { Router } from 'express';
const router = Router();

import User from 'models/userModel';

import { append, read } from 'services/database/users';

router.post('/', (req, res) => {

    /*
        * Register user

        * Data expected to be received:
            * email
            * password
        
        * Security measures and sanitization are not being taken into account.
        * Note: This is a mock api.
    */

    const { email, password }: User = req.body;
    
    /* Simulates adding an user to the database. */
    append({ email, password });
    console.log(read());

    return res.send({ success: true });

});


export default router;
export { router }