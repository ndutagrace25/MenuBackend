require("dotenv").config();

const credentials = {
  apiKey: process.env.API_KEY, // use your sandbox app API key for development in the test environment
  username: process.env.SMS_USERNAME, // use 'sandbox' for development in the test environment
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service

module.exports = {
  //   send sms
  sendMessage(text, result) {
    const sms = AfricasTalking.SMS;

    const options = {
      // Set the numbers you want to send to in international format
      to: "+254722946748",
      // Set your message
      message: text.message,
      // Set your shortCode or senderId
      //from: "XXYYZZd",
    };

    // That’s it, hit send and we’ll take care of the rest
    sms
      .send(options)
      .then((response) => {
        result(null, { message: "Success" });
      })
      .catch((error) => {
        result(error, null);
      });
  },
};
