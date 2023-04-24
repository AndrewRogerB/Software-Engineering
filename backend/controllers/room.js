const { validationResult } = require('express-validator');

const Room = require('../models/room');
const User = require("../models/user");
const {NULL} = require("mysql8/lib/protocol/constants/types");

exports.fetchAll = async (req, res, next) => {
    try {
        const allPosts = await Room.fetchAll();
        res.status(200).json(allPosts);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postRoom = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors.array());
        return;
    }

    const topic = req.body.topic;
    const creator = req.body.creator;
    const player = NULL;
    const stance = req.body.stance;
    const timeO = req.body.timeO;


    try {
        const room = {
            topic: topic,
            creator: creator,
            player: player,
            stance: stance,
            timeO: timeO,
        };
        const result = await Room.save(room);

        const idResult = await Room.findID(room)

        res.status(201).json({ message: 'Posted!', id: idResult[0].id }); // Include the id value in the response JSON object
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteRoom = async (req, res, next) => {
    try {
        const deleteResponse = await Room.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

