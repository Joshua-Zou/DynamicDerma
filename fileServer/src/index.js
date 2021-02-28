var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const reverseImageSearch = require("reverse-image-search-google");
const fileUpload = require("express-fileupload");
const fs = require("fs");
var cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dnh2hkbuf",
  api_key: "491874445585153",
  api_secret: "pgq6oDTwMgGPrXHa64bTMtidsOk"
});

app.use(bodyParser.json({ extended: true }));
app.use(fileUpload());
app.use(cors());
const hostname = "0.0.0.0";
const port = 3000;

// http status codes
const statusOK = 200;
const statusNotFound = 404;

// Handle GET (all) request (not neccessary but why not)
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});
app.get("/", function (req, res) {
  //fs.unlinkSync("/sandbox/src/images/123.PNG");
  res.send("hello");
  res.statusCode = statusOK;
});
app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res
      .status(400)
      .redirect("https://Front-End.joshuaren.repl.co/html/nofile.html"); //redirects to an error page
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/images/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    //res.send("File uploaded!");
    console.log("File Uploaded");
    cloudinary.uploader.upload(
      __dirname + "/images/" + sampleFile.name,
      function (error, result) {
        console.log(error.url);
        fs.unlinkSync(__dirname + "/images/" + sampleFile.name);
        main();
        async function main() {
          var imageResult;
          const doSomething = (results) => {
            for (var i = 0; 0<results.length; i++){
            
            if (results[i] === undefined) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/error.html"
              );
              return;
            }
            
            console.log(results[i].title);
            imageResult = results[i].title;
            if (imageResult.toString().toLowerCase().includes("acne")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/acne.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("cold sore")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/cold_sore.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("blister")|| imageResult.toString().toLowerCase().includes("epidermolysis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/blisters.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("hive")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/hives.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("actinic")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/actinic_keratosis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("rosacea")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/rosacea.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("carbuncle")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/carbuncle.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("latex")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/latex.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("seborrheic")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/seborrheicegzma.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("eczema")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/eczema.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("psoriasis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/psoriasis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("cellulitis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/cellulitis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("measles")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/measles.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("basal")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/basal_cell_carcinoma.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("squamous")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/squamouscancer.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("melanoma")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/melanoma.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("lupus")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/lupus.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("dermatitis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/contact_dermatitis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("vitiligo")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/vitiligo.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("wart")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/wart.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("chicken")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/chickenpox.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("pilaris")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/keratosis_pilaris.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("ringworm")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/ringworm.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("melasma")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/melasma.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("impetigo")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/impetigo.html"
              );
              return;
            }
          };
          res.redirect(
                "https://front-end.joshuaren.repl.co/html/nomatches.html"
              );
          };
          reverseImageSearch(error.url, doSomething);
        }
      }
    );
  });
});

app.listen(port, hostname, function () {
  console.log(`Listening at http://${hostname}:${port}/...`);
});
