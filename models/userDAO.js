
User = require('../models/userModel');



module.exports = class userDAO {
    static getWeeklyScores() {
    	console.log("5555555555555555555555555555");
        return User.find()
                    .catch(() => error("bla"));
    }
};