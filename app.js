const express = require("express");
const qrcode = require("qrcode");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.get("/qrcode", (req, res) => {
  const url = req.query.url;
  qrcode.toDataURL(url, (err, url) => {
    if (err) throw err;
    // res.send(`<img style="width:300px" src="${url}"/>`);
    res.render("index", { qrcode: url });
  });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
