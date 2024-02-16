import express from 'express'
import { createConversation, getConversations } from '../controller/chat.controller.js';

const router = express.Router();

router.post('/send', createConversation);
router.post('/get', getConversations);

export default router;