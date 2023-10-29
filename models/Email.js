const mongoose = require('mongoose');

// Define the schema for the "Email" collection
const emailSchema = new mongoose.Schema({
  email_name: {
    type: String,
  },
  // Add more fields as needed
});

// Create the "Email" model
const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
