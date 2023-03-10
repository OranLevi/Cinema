# Cinema

A web application for recommending watching movies and TV shows and reading user reviews.

## Technologies Used

- React (frontend)
- Node.js (backend)
- Axios
- Bootstrap
- Cors
- Express
- Nodemon
- MongoDB
- Mongoose
- universal-cookie
- dotenv
- bcrypt

## Features

- Browse movies and TV shows by rating, Release Date or popularity.
- Search for movies and TV shows.
- Read user reviews and ratings for each movie and TV show.
- Personalized watchlist.
- Sign in to your account to access your saved watchlist.

## Getting Started

To run this application on your local machine, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/OranLevi/Cinema.git
  
2. Create a .env file in the server directory and add your MongoDB connection string and API key from [TheMovieDB](https://www.themoviedb.org/signup):

   ```sh
   API_KEY=YOUR_API_KEY_HERE 
   MONGODB_URI=YOUR_MONGODB_URI_HERE
   
3. Open a new terminal tab or window and navigate to the server:

   ```sh
   cd server
 
4. Install dependencies for the server:

   ```sh
   npm install 

5. Start the server:

   ```sh
   npm start
   
6. Install dependencies:

   ```sh
   cd ../client
   npm install
   
7. Start the client:

   ```sh
   npm start
   
8. Open the application in your browser:

   ```sh
   http://localhost:3000/
 
## Contributing

Contributions are always welcome! If you have any ideas for features, bug fixes, or other improvements, please submit a pull request.
