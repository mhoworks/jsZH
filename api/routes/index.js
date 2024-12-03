var express = require("express");
// const config = require("../config");
var router = express.Router();

const fs = require("fs");

// otomatik router yapisi | routes klasorune eklenen her dosya otomatik olarak calisacak
// verdigim adreste bulunan dosyayi oku
let routes = fs.readdirSync(__dirname);
for (let route of routes) {
  if (route.includes(".js") && route != "index.js") {
    router.use("/" + route.replace(".js", ""), require("./" + route));
  }
}

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express", config });
// });

module.exports = router;
