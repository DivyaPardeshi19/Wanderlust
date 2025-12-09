Wanderlust – Travel Stay Booking Web App

Wanderlust is a Full-Stack travel stay booking platform inspired by Airbnb.
Users can explore listings, filter by categories, view detailed pages, sign up, log in, create/edit/delete listings, and leave reviews. The app uses Node.js, Express, MongoDB Atlas, Mongoose, Passport.js, Cloudinary.

🚀 Features

✨ User Authentication

Secure login & signup using Passport.js.
Session-based authentication.

🏕️ Listings Management

Create, edit, and delete property listings.
Upload images for each listing.

⭐ Reviews System

Add, edit, and delete reviews.
Real-time average rating updates.

📱 Responsive UI

Mobile-friendly and clean user experience.

🛠️ Tech Stack

Frontend: HTML, CSS, EJS, Bootstrap.
Backend: Node.js, Express.js.
Database: MongoDB & Mongoose.
Authentication: Passport.js.


📦 Installation & Setup
🧰 Prerequisites

Make sure you have installed:
Node.js
MongoDB (local or cloud MongoDB Atlas)


💻 Steps to Run Locally
# Clone the repository
git clone https://github.com/DivyaPardeshi19/wanderlust.git

# Go to project folder
cd wanderlust

# Install dependencies
npm install

# Create a .env file and add the following:
# MAPBOX_TOKEN=your_mapbox_token
# MONGODB_URI=your_mongodb_connection_string
# SESSION_SECRET=your_secret_key

# Start the server
npm start


📁 Folder Structure

Wanderlust/
│── public/        # Static files
│── routes/        # Express routes
│── models/        # Mongoose schemas
│── views/         # EJS templates
│── controllers/   # Functions for routes (if used)
│── app.js         # Main server file
│── package.json
│── .env
