const express = require("express");
const userController = require('./controllers')
const router = express.Router();

// GET a single user data/setting
router.get('/user/data/:email', userController.getUserSettings);

// POST data to user (create or update user settings)
router.post('/user/data', userController.updateUserSettings);

// DELETE a user account
router.delete('/user/data/:email', userController.deleteUserSettings);


module.exports = router;