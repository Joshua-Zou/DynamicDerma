var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const reverseImageSearch = require("reverse-image-search-google");

app.use(bodyParser.json({ extended: true }));

app.use(cors());
const hostname = "0.0.0.0";
const port = 3000;

// http status codes
const statusOK = 200;
const statusNotFound = 404;

// Handle GET (all) request
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});
app.get("/", function (req, res) {
  // send response

  res.send("hello");
  res.statusCode = statusOK;
});

app.post("/", urlencodedParser, async function (req, res) {
  // error checking
  main();
  async function main() {
    var imageResult;
    const doSomething = (results) => {
      if (results[1] === undefined) {
        res.redirect("https://front-end.joshuaren.repl.co/error.html");
        return;
      }
      console.log(results[1].title);
      imageResult = results[1].title;
      if (imageResult.toString().toLowerCase().includes("acne")) {
        res.redirect("https://front-end.joshuaren.repl.co/html/acne.html");
      } else if (imageResult.toString().toLowerCase().includes("cold sore")) {
        res.send("that is cold sore");
      } else if (imageResult.toString().toLowerCase().includes("blister")) {
        res.send("that is a blister");
      } else if (imageResult.toString().toLowerCase().includes("hive")) {
        res.send("that is hives");
      } else if (imageResult.toString().toLowerCase().includes("actinic")) {
        res.send("that is Actinic keratosis");
      } else if (imageResult.toString().toLowerCase().includes("rosacea")) {
        res.send("that is rosacea");
      } else if (imageResult.toString().toLowerCase().includes("carbuncle")) {
        res.send("that is carbuncle");
      } else if (imageResult.toString().toLowerCase().includes("latex")) {
        res.send("that is a latex allergic reaction");
      } else if (imageResult.toString().toLowerCase().includes("eczema")) {
        res.send("that is eczma");
      } else if (imageResult.toString().toLowerCase().includes("psoriasis")) {
        res.send("that is Psoriasis");
      } else if (imageResult.toString().toLowerCase().includes("cellulitis")) {
        res.send("that is Cellulitis");
      } else if (imageResult.toString().toLowerCase().includes("measles")) {
        res.send("that is Measles");
      } else if (imageResult.toString().toLowerCase().includes("basal")) {
        res.send("that is Basal cell carcinoma");
      } else if (imageResult.toString().toLowerCase().includes("squamous")) {
        res.send("that is Squamous cell carcinoma");
      } else if (imageResult.toString().toLowerCase().includes("melanoma")) {
        res.send("that is Melanoma");
      } else if (imageResult.toString().toLowerCase().includes("lupus")) {
        res.send("that is Lupus");
      } else if (imageResult.toString().toLowerCase().includes("dermatitis")) {
        res.send("that is Contact dermatitis");
      } else if (imageResult.toString().toLowerCase().includes("vitiligo")) {
        res.send("that is Vitiligo");
      } else if (imageResult.toString().toLowerCase().includes("wart")) {
        res.send("that is a wart");
      } else if (imageResult.toString().toLowerCase().includes("chicken")) {
        res.send("that is chickpox");
      } else if (imageResult.toString().toLowerCase().includes("seborrheic")) {
        res.send("that is Seborrheic eczema");
      } else if (imageResult.toString().toLowerCase().includes("pilaris")) {
        res.send("that is Keratosis pilaris");
      } else if (imageResult.toString().toLowerCase().includes("ringworm")) {
        res.send("that is ringworm");
      } else if (imageResult.toString().toLowerCase().includes("melasma")) {
        res.send("that is melasma");
      } else if (imageResult.toString().toLowerCase().includes("impetigo")) {
        res.send("that is impetigo");
      } else {
        res.send("we couldn't find any matches.");
      }
    };

    reverseImageSearch(req.body.url, doSomething);
  }
  console.log(req.body.url);
  // send response
  //res.send("hello world");
  res.statusCode = statusOK;
});

app.listen(port, hostname, function () {
  console.log(`Listening at http://${hostname}:${port}/...`);
});
