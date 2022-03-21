const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  if ("url" in req.query) {
    ytdl.getInfo(req.query.url).then(h => {

      var k = ytdl.filterFormats(h.formats, 'audioandvideo');

      k = JSON.stringify(k).substr(0, JSON.stringify(k).length - 1);
      k = k + ',{"title":"' + h.videoDetails.title + '"}]';
      res.send(JSON.parse(k));
    });

  }
  else {
    res.send("URL NOT FOUND");
  }
});



app.get("/aud", (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  if ("url" in req.query) {
    ytdl.getInfo(req.query.url).then(h => {

      var k = ytdl.filterFormats(h.formats, 'audioonly');

      var n = k[k.length - 1].url;
      var thu = h.videoDetails.thumbnails[h.videoDetails.thumbnails.length - 1].url;
      k = '{"url":"' + n + '","title":"' + h.videoDetails.title + '","thumb":"' + thu + '"}';
      res.send(JSON.parse(k));
    });

  }
  else {
    res.send("URL NOT FOUND");
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("YTPRO API IS RUNNING!!");
});
