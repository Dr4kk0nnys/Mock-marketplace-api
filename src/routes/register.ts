import { Router } from 'express';
const router = Router();

import IEmailAndPassword from 'interfaces/IEmailAndPassword';

router.post('/', (req, res) => {

    /*
        * Register user

        * Data expected to be received:
            * email
            * password
        
        * Security measures and sanitization are not being taken into account
        * Note: This is a mock api.
    */

    const { email, password }: IEmailAndPassword = req.params;



});


export default router;
export { router }