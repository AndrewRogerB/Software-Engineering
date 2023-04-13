const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');
const error = require("../controllers/error");

router.post(
'/signup',
    [
        body('name').trim().not().isEmpty()
            .custom(async (name, { req, res }) => {
                const user = await User.findName(name);
                if (user.length > 0) {
                    const error = new Error('Name is already taken.');
                    error.statusCode = 400;
                    throw error; // pass the error to the error handler middleware
                }
            }),
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom(async (email, { req, res }) => {
                const user = await User.find(email);
                if (user.length > 0) {
                    const error = new Error('Email address already exists.');
                    error.statusCode = 400;
                    throw error; // pass the error to the error handler middleware
                }
            })
            .normalizeEmail(),
        body('password').trim().isLength({ min: 7 }),
        body('phone').trim().not().isEmpty()
            .custom(async (phone, { req, res }) => {
                const user = await User.findPhone(phone);
                if (user.length > 0) {
                    const error = new Error('Phone Number already in use.');
                    error.statusCode = 400;
                    throw error; // pass the error to the error handler middleware
                }
            })
    ],
    authController.signup
);

router.post('/login', authController.login);

module.exports = router;
