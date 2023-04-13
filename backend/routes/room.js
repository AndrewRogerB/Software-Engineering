const express = require('express');

const { body } = require('express-validator');

const roomController = require('../controllers/room');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', roomController.fetchAll);

router.post(
    '/',
    [
        body('topic').trim().isLength({ min: 3 }).not().isEmpty(),
        body('stance').trim().isLength({ min: 3 }).not().isEmpty(),
        body('timeO').trim().not().isEmpty(),
        body('creator').not().isEmpty(),
    ],
    roomController.postRoom

);

router.delete('/:id', auth, roomController.deleteRoom);

module.exports = router;