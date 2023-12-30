const Usermodel = require("../data-access-object/user.dao");
const User = Usermodel.usersModel;
const Userfeedback = Usermodel.UserfeedbackModel;
const Userotherfeedback = Usermodel.UserotherfeedbackModel;
const UserSuggestion = Usermodel.UserSuggestionModel;
const bcrypt = require('bcrypt');
const { ResponseModelFactory } = require('../utils/response');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const { constData } = require('../config');
const jwt = require('jsonwebtoken');
const { SENDER_NAME, SENDER_PASSWORD, SENDER_SERVICE, MAIL_HOST, MAIL_PORT } = require('../config/const-mail');
const mongoose = require('mongoose');
const loggerDao = require('../data-access-object/logger.dao');
const { error } = require("console");
const { json } = require("body-parser");




const createToken = (user) => {
    // Generate a token with the user data and a secret key
    const token = jwt.sign({ user }, constData.SECRET_KEY, { expiresIn: '1h' });

    return token;
};

// Register api
exports.signupUser = async (req, res, next) => {

    try {

        const { firstName, lastName, Email, password, emailValidated, Address, city, PhoneNumber } = req.body;


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
       // const verificationToken = generateVerificationToken();
        const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, specialChars: false, upperCaseAlphabets: false });
        
        const newUser = {

            firstName: firstName,
            lastName: lastName,
            email: Email,
            password: hashedPassword,
            emailValidated: emailValidated,
            Address: Address,
            PhoneNumber: PhoneNumber,
            city: city,
            otp: otp,
            otpExpiry: Date.now() + 180000,
           // verificationToken,

        };

        const result = await User.create(newUser);

        // Send verification email
        // const verificationLink = generateVerificationLink(email, verificationToken);
        await sendVerificationEmail(Email, otp);

        res.status(200).json({
            message: 'User signup successful',
            result,
        });
    } catch (error) {
        next(error);
    }
};



// Generate a unique verification token
// function generateVerificationToken() {
//     const tokenLength = 32;
//     return crypto.randomBytes(tokenLength).toString('hex');
// }

// Generate the verification link
// function generateVerificationLink(email, verificationToken) {
//     const verificationLink = `http://localhost:4000/api/v1/verify-email?token=${verificationToken}&email=${email}`;
//     return verificationLink;
// }

// Send verification email
async function sendVerificationEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        service: SENDER_SERVICE,
        host: MAIL_HOST,
        port: MAIL_PORT,
        secure: false,
        auth: {
            user: SENDER_NAME,
            pass: SENDER_PASSWORD
        },
    });

    const mailOptions = {
        from: SENDER_NAME,
        to: email,
        subject: 'verification OTP',
        text: `Your OTP to verify your email: ${otp}`
    };

    await transporter.sendMail(mailOptions);
};



// login api
exports.login = async (req, res, next) => {


    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json(ResponseModelFactory.GetErrorResponseModel(404, 'User not found'));
        }

        if (user.emailValidated == false) {
            return res.status(404).json(ResponseModelFactory.GetErrorResponseModel(404, 'Email is not verify'));
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        // If passwords do not match 
        if (!passwordMatch) {
            const loggerData = {
                "reqURL": req.protocol + '://' + req.get('host') + req.originalUrl,
                "reqBody": ' ',
                "method": error.message,
                "apiMethod": "auth",
                "type": "Error",
                "message": "invalid password"
            }
            loggerDao.create(loggerData);
            return res.status(401).json(ResponseModelFactory.GetErrorResponseModel(401, 'Invalid password'));
        }

        // const token = await createToken(user._id);


        // Return a success response
        return res.status(200).json(ResponseModelFactory.GetSuccessResponseModel({ message: 'Login successful' }));
    } catch (error) {

        next(error);

    }



};

// Forgot Password api
exports.forgotpassword = async (req, res, next) => {

    try {

        const { email } = req.body;

        const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, specialChars: false, upperCaseAlphabets: false });

        // Save OTP and expiry time in user document
        const user = await User.findOneAndUpdate({ email }, { otp, otpExpiry: Date.now() + 180000 }, { new: true });
        // const result = await User.create(user);


        if (!user) {
            return res.status(400).json({ message: 'Email does not exist.' });
        }


        var transporter = nodemailer.createTransport({
            service: SENDER_SERVICE,
            host: MAIL_HOST,
            port: MAIL_PORT,
            secure: false,
            auth: {
                user: SENDER_NAME,
                pass: SENDER_PASSWORD
            }

        });

        var mailOptions = {
            from: SENDER_NAME,
            to: email,
            subject: 'verification code',
            text: 'This is your one time password ' + otp + ' It is valid for 3 minutes only'
        };

        transporter.sendMail(mailOptions);


        res.json({ message: 'OTP sent to your email.' });

    } catch (error) {

        next(error);

    }

};

//Submit otp api
exports.submitotp = async (req, res, next) => {

    try {

        const { otp } = req.body;


        const user = await User.findOne({ otp, otpExpiry: { $gt: Date.now(), $lt: Date.now() + 180000 } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
        } else {

            res.json("otp matched");
            user.emailValidated = true;
            user.verificationToken = undefined;
            const result = await User.create(user);

        }



    } catch (error) {

        next(error);
    }
};
// Reset Password api
exports.resetpassword = async (req, res, next) => {

    try {


        const { newPassword, confirmpassword, email } = req.body

        if (newPassword !== confirmpassword) {
            return res.status(400).json({ message: 'password not match' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        const password = hashedPassword;
        const user = await User.findOneAndUpdate({ email }, { password });

        if (!user) {
            return res.status(400).json({ message: 'Email does not exist' });
        }
        const result = await User.create(user);

        res.json({ message: 'password reset successful' });

    } catch (error) {

        next(error);
    }

};

// Suggetion send api
exports.sendSuggestion = async (req, res, next) => {

    try {

        const { Name, Email, PhoneNumber, Suggestionone, Suggestiontwo  } = req.body;
        
        // Create a new message
        const newSuggestion = {
            Name,
            Email,
            PhoneNumber,
            Suggestionone,
            Suggestiontwo,
            
        };
        
        const savedSuggestion = await UserSuggestion.create(newSuggestion);

        res.status(200).json({ message: "Suggestion sent successfully", data: savedSuggestion });

       
    } catch (error) {
        next(error);
    }
};

// FIR Feedback api
exports.sendFIRFeedback = async (req, res, next) => {

    try {
        const { FIRNumber, Name, PhoneNumber, feedbacktext, Rating } = req.body;

        // Create a new message
        const newfeedback = {
            FIRNumber,
            Name,
            PhoneNumber,
            feedbacktext,
            Rating
        };

        // Save the message to the database
        const savedfeedback = await Userfeedback.create(newfeedback);

        res.status(200).json({ message: "Message sent successfully", data: savedfeedback });
    } catch (error) {

        next(error);
    }

};
exports.sendotherFeedback = async (req, res, next) => {

    try {
        const { name, phone, policeStation, rating, feedback } = req.body;

        // Create a new message
        const newfeedback = {
            name,
            phone,
            policeStation,
            feedback,
            rating
        };

        // Save the message to the database
        const savedfeedback = await Userotherfeedback.create(newfeedback);

        res.status(200).json({ message: "Message sent successfully", data: savedfeedback });
    } catch (error) {

        next(error);
    }

}


exports.resendOtp = async (req, res, next) => {
    try {
        const { email } = req.body;

        const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, specialChars: false, upperCaseAlphabets: false });

        // Save OTP and expiry time in user document
        const user = await User.findOneAndUpdate({ email }, { otp, otpExpiry: Date.now() + 180000 }, { new: true });
        

        if (!user) {
            return res.status(400).json({ message: 'Email does not exist' });
        }


        var transporter = nodemailer.createTransport({
            service: SENDER_SERVICE,
            host: MAIL_HOST,
            port: MAIL_PORT,
            secure: false,
            auth: {
                user: SENDER_NAME,
                pass: SENDER_PASSWORD
            }

        });

        var mailOptions = {
            from: SENDER_NAME,
            to: email,
            subject: 'verification code',
            text: 'This is your one time password ' + otp + ' It is valid for 3 minutes only'
        };

        transporter.sendMail(mailOptions);


        res.json({ message: 'OTP sent to your email.' });

    } catch (error) {

        next(error);

    }
};

