require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data } = require("./data"); // your sampleListings

// Connect to MongoDB
// mongoose.connect(process.env.ATLASDB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to Atlas DB"))
// .catch(err => console.log(err));

// Seed function
const seedDB = async () => {
  try {
    // Delete existing listings
    await Listing.deleteMany({});
    console.log("Existing listings removed");

    // Insert new listings from data.js
    await Listing.insertMany(data);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
seedDB();
