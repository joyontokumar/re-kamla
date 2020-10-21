const express = require("express");
const router = express.Router();
const path = require("path");
const dirPath = path.join(__dirname, '../public');
const multer = require("multer");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dirPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})
let upload = multer({ storage: storage });

module.exports = {
    upload
};
