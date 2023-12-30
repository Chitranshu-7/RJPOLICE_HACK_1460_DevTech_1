const { errors } = require('../utils');
const { constData } = require("../config");
const loggerDao = require('../data-access-object/logger.dao');
const bcrypt = require("bcryptjs");
const TOML = require('fast-toml');
const AWS = require("aws-sdk");
require('dotenv').config();

exports.validateString =  function (stringToCheck, regexExpression, errorMessage) {
    if(!regexExpression.test(stringToCheck)){
        throw new errors.BadRequest(errorMessage);
    }
}

exports.createLoggerData = function (requestData, methodName, loggerType, message){
    const loggerData = {
        "reqURL" : requestData.protocol + '://' + requestData.get('host') + requestData.originalUrl,
        "reqBody" : JSON.stringify(requestData.body),
        "method" : requestData.method,
        "apiMethod" : methodName,
        "type" : loggerType,
        "message" : message
      }
      loggerDao.create(loggerData);
}

exports.convertDate = function(birthDate){
    let parts =birthDate.split('/');
    let convertedBirthDate ;
    if(parts){
        let bdate = parts[1] + '/'+ parts[0] + '/' + parts[2];
         convertedBirthDate = new Date(bdate); 
    }
    return convertedBirthDate;
}

exports.encrypt = async function(stringToEncrypt){
    let salt = await bcrypt.genSalt(10);
    let encryptedDate = await bcrypt.hash(stringToEncrypt, salt);
    return encryptedDate;
}

exports.checkCurrencyExistinTomlOrNot = async function(currencyCode){
    let tomlFile = await TOML.parseFile('.well-known/stellar.toml');
    if (!tomlFile.CURRENCIES) {
        throw new errors.BadRequest(CONSTANTS.CURRIENCIES_NOT_IN_TOML);
    }
    let assetIssuer = ''
    for (let currencyInstance of tomlFile.CURRENCIES) {
        if (currencyInstance.code === currencyCode) {
        assetIssuer = currencyInstance.issuer;
        break
        }
    }
    if (!assetIssuer){
        throw new errors.BadRequest(`unable to find the ${currencyCode} issuer on the home domain's TOML file`);
    }
    return assetIssuer;
}

exports.sendMail = async function(destinationAddresses, mailBody, mailSubject){
    let ses = new AWS.SES({ apiVersion: "2010-12-01" });
    let params = {
        Destination: {
          ToAddresses: destinationAddresses // Email address/addresses that you want to send your email
        },
        Message: {
          Body: mailBody,
          Subject: mailSubject
        },
        Source: constData.SOURCE_EMAIL_ID
    };
    const sendEmail = ses.sendEmail(params).promise();

    sendEmail
      .then(data => {
        console.log("email submitted to SES", data);
      })
      .catch(error => {
        console.log('error',error);
      });
}

exports.sendOTP = async function(countrycode, phonenumber){
    
    var random = Math.floor(1000 + Math.random() * 9000);
    const YOUR_MESSAGE = `Your verification code is ${random}`;
    var params = {
      Message: YOUR_MESSAGE,
      PhoneNumber: '' + countrycode + '' +  phonenumber,
      //PhoneNumber: '91' +  phonenumber,
      MessageAttributes: {
          'AWS.SNS.SMS.SenderID': {
              'DataType': 'String',
              'StringValue': 'OTP'
          },
          'AWS.SNS.SMS.SMSType': {
              'DataType': 'String',
              'StringValue': "Transactional"
          }
      }
    };
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
    return random;
}