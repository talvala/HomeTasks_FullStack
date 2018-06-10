
User = require('../models/userModel');
Tasks = require('../models/tasksModel');


module.exports = class userDAO {
    static mostPointsThisWeek() {
        return User.find(req.user).sort({scores: 'desc'})
                   .catch(() => error("bla"));
    }

  static mostTasksDoneSoFar() {
    return User.find().sort({scores: 'desc'})
      .catch(() => error("bla"));
  }

  static TasksPerDay() {
    return User.find({}, 'name scores')
      .catch(() => error("bla"));
  }

  static TheMedalists() {
    return User.find().sort({scores: 'desc'})
      .catch(() => error("bla"));
  }
};