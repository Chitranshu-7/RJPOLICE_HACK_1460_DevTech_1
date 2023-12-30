const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    emailValidated: {
      type: Boolean,
      default:false
    },
    Address: {
      type: String
    },
    PhoneNumber: {
      type: String
    },
    city: {
      type: String
    },
    postalCode: {
      type: String
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
    verificationToken: {
      type: String
    },
    // skills: [SkillSchema],
  
  },
  {
    timestamps: true,
  },
);

const UserSuggestionSchema = new Schema({
  Name:{
    type: String,
    require: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  PhoneNumber: {
    type: String,
    require: true
  },
  Suggestionone: {
    type: String,
    require: true
  },
  Suggestiontwo: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserfeedbackSchema = new Schema(
  {
    FIRNumber: {
      type: String,
      required: true,
      ref: "User", // Reference to the User model
    },
    Name:{
      type: String,
      require: true,
    },
    PhoneNumber: {
      type: String,
      require: true
    },
    feedbacktext: {
      type: String,
      required: true,
    },
    Rating: {
      type: Boolean,
      require: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const UserotherfeedbackSchema = new Schema(
  {
    name:{
      type: String,
      require: true,
    },
    policeStation:{
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true
    },
    feedback: {
      type: String,
      required: true
    },
  
    rating: {
      type: Boolean,
      require: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);



module.exports = { UserSchema, UserfeedbackSchema, UserSuggestionSchema, UserotherfeedbackSchema };  
