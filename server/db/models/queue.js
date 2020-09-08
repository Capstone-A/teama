const Sequelize = require("sequelize");
const db = require("../db");

const Queue = db.define("queue", {
    uri: {
        type: Sequelize.TEXT,
    },
    trackName: {
        type: Sequelize.TEXT,
    },
    artist: {
        type: Sequelize.TEXT,
    },
})

module.exports = Queue
