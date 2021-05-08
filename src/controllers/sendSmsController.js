const credentials = {
  apiKey: "c22b3842b972ff5b24f6e486fdf7c2a9b734ba1e8faae6526bc7cd7f99025392", // use your sandbox app API key for development in the test environment
  username: "kibe-junior", // use 'sandbox' for development in the test environment
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
      to: "+254708807403",
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
        result(error, null)
      });
  },
};
