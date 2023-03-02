const express = require("express");
const https = require('https');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

app.get("/card/:category/:mediaType", (req, res) => {
  const cardCategory = req.params.category;
  const mediaType = req.params.mediaType;

  let url;
  switch (cardCategory) {
    case "trending":
      url = `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${process.env.API_KEY}`; break;
    case "populer":
      url = `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${process.env.API_KEY}`; break;
    case "toprated":
      url = `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${process.env.API_KEY}`; break;
    case "upcoming":
      url = `https://api.themoviedb.org/3/${mediaType}/upcoming?api_key=${process.env.API_KEY}`; break;
    default:
      res.status(400).send("Error");
      return;
  }

  https.get(url, (httpsRes) => {
    let body = "";
    httpsRes.on("data", (chunk) => {
      body += chunk;
    });
    httpsRes.on("end", () => {
      try {
        let data = JSON.parse(body);

        res.send(data);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
      };
    });
  }).on("error", (error) => {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  });
});

app.get("/header", (req, res) => {

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`

  https.get(url, (httpsRes) => {
    let body = "";
    httpsRes.on("data", (chunk) => {
      body += chunk;
    });
    httpsRes.on("end", () => {
      try {
        let data = JSON.parse(body);

        res.send(data);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
      };
    });
  }).on("error", (error) => {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  });
});


app.listen(3001, () => {
  console.log("Server run")
})