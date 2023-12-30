const mongoose = require("mongoose");
const UserSuggestionSchema  = require("../model/user.model").UserSuggestionSchema;
const usersSchema = require("../model/user.model").UserSchema;
const UserfeedbackSchema = require("../model/user.model").UserfeedbackSchema;
const UserotherfeedbackSchema = require("../model/user.model").UserotherfeedbackSchema;

usersSchema.statics = {
  create: function (data) {
    const user = new this(data);
    return user.save();
  }
};


UserSuggestionSchema.statics = {
  create: function (data) {
    const UserFollower = new this(data);
    return UserFollower.save();
  },
};

UserfeedbackSchema.statics = {
  create: function (data) {
    const UserMessage = new this (data);
    return UserMessage.save();
  }
};

UserotherfeedbackSchema.statics = {
  create: function (data) {
    const user = new this(data);
    return user.save();
  }
};

const UserfeedbackModel = mongoose.model("Feedback", UserfeedbackSchema);
const UserotherfeedbackModel = mongoose.model("OtherFeedback",UserotherfeedbackSchema);
 const UserSuggestionModel = mongoose.model("UserSuggestions", UserSuggestionSchema);
const usersModel = mongoose.model("User", usersSchema);
module.exports = {usersModel, UserfeedbackModel, UserSuggestionModel, UserotherfeedbackModel};
