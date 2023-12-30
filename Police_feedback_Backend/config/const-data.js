module.exports = Object.freeze({
  SECRET_KEY: "Tapp-Developed-By-SuperDevelopers",
  MAX_SIZE: 3145728,
  PASSWORD_REGEX : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
  EMAIL_REGEX : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  NUMBER_REGEX : /^\d+$/,
  NAME_REGEX : /^[A-Za-z]+$/,
  INVALID_PASSWORD_ERROR : 'Please enter valid Password.',
  INVALID_EMAIL_ERROR : 'Please enter valid Email',
  INVALID_FIRST_NAME : 'Please enter valid first name',
  INVALID_LAST_NAME : 'Please enter valid last name',
  INVALID_PHONE_NUMBER : 'Please enter valid phone number',
  USER_ALREADY_EXIST : 'User Already Exists',
  INFO_LOGGER_TYPE : 'INFO',
  ERROR_LOGGER_TYPE : 'ERROR',
  CURRIENCIES_NOT_IN_TOML : "the home domain specified does not have a CURRENCIES section on it's TOML file",
  SOURCE_EMAIL_ID : "dixitpunit786@gmail.com"
});
