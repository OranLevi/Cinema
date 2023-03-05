const express = require("express");
const cors = require('cors');

const { getDataApi } = require('./getDataApi.js');

require('dotenv').config();

const app = express();
app.use(cors());

app.get("/card/:category/:mediaType/:page", (req, res) => {
  const cardCategory = req.params.category;
  const mediaType = req.params.mediaType;
  const page = req.params.page;

  let url;
  switch (cardCategory) {
    case "trending":
      url = `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${process.env.API_KEY}&page=${page}`; break;
    case "populer":
      url = `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${process.env.API_KEY}&page=${page}`; break;
    case "toprated":
      url = `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${process.env.API_KEY}&page=${page}`; break;
    case "upcoming":
      url = `https://api.themoviedb.org/3/${mediaType}/upcoming?api_key=${process.env.API_KEY}&page=${page}`; break;
    default:
      res.status(400).send("Error");
      return;
  }

  getDataApi(url, res)
});

app.get("/header", (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`

  getDataApi(url, res)
});

app.get("/details/:mediaType/:id", (req, res) => {
  const id = req.params.id;
  const mediaType = req.params.mediaType;

  const url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.API_KEY}`

  getDataApi(url, res)
});

app.get("/reviews/:mediaType/:id", (req, res) => {
  const id = req.params.id;
  const mediaType = req.params.mediaType;

  const url = `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=${process.env.API_KEY}`

  getDataApi(url, res)
});

app.get("/search/:textSerach/:page", (req, res) => {
  const textSerach = req.params.textSerach;
  const page = req.params.page;

  const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${textSerach}&page=${page}`

  getDataApi(urlMovies, res)

});

app.listen(3001, () => {
  console.log("Server run")
})