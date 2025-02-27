import express from 'express';
import { createListing,deleteListing,UpdateListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/create',verifyToken, createListing)
router.delete('/delete/:id',verifyToken, deleteListing) 
router.post('/update/:id',verifyToken, UpdateListing)



export default router;