const User = require('../controller/user.controller');
const auth = require('../middleware/auth');

module.exports = (router, mainPath) => {
  router.post('/signup', User.signupUser);
  router.post('/login', User.login);
  router.post('/forgot-password',User.forgotpassword);
  router.post('/submitotp',User.submitotp);
  router.post('/resetpassword',User.resetpassword);
  router.post('/sendsuggestion' ,User.sendSuggestion);
  router.post('/sendFIRFeedback',User.sendFIRFeedback);
  router.post('/resendotp', User.resendOtp);
  router.post('/otherfeedback',User.sendotherFeedback);
}
 