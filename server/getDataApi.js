const https = require('https');

function getDataApi(url, res) {
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
}

module.exports = { getDataApi };