const mongoose = require("mongoose");
const Listing = require("../models/listing"); // go up one level to models
const listings = require("./data.js"); // data in same folder

// Use your Atlas connection string
const dbUrl = "mongodb+srv://divyapardeshi999_db_user:KpiA4eeMi1P5yJzs@cluster0.c9si5gl.mongodb.net/?appName=Cluster0";

mongoose.connect(dbUrl)
  .then(async () => {
    console.log("Connected to Atlas DB");

    // Optional: clear old listings
    await Listing.deleteMany({});

    // Insert all listings from data.js
    await Listing.insertMany(listings);
    console.log("All listings added!");

    mongoose.disconnect();
  })
  .catch(err => console.log(err));
