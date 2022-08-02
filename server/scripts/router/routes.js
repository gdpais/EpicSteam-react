const express = require('express');
const router = express.Router();
const requestHandlers = require('../requests');

// GET
router.get('/users', requestHandlers.users);

// POST
router.post('/users', requestHandlers.signUp);

router.post('/users/login', requestHandlers.signIn);

module.exports = router;
