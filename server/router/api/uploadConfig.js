
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder;
        if (req.baseUrl === '/api/blog') {
            folder = 'blogs';
        } else {
            folder = 'users';
        }
        const filePath = path.resolve(
            __dirname,
            '../../public/uploads/',
            folder
        );
        cb(null, filePath);
    },
    filename: function (req, file, cb) {
        const timeStamp = Date.now();
        const random = Math.random().toString(36).slice(-8);
        const ext = path.extname(file.originalname);
        let fileName;
        if (req.baseUrl === '/api/blog/uploadImg') {
            fileName = `${req.userId}-${timeStamp}-${random}${ext}`;
        } else {
            fileName = `${timeStamp}-${random}${ext}`;
        }
        // const fileName = `${timeStamp}-${random}${ext}`;
        cb(null, fileName);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 500 * 1024 },
    fileFilter(req, file, cb) {
        const extname = path.extname(file.originalname).toLowerCase();
        const whiteList = ['.jpeg', '.gif', '.jpg', '.png'];
        const imgs = whiteList.filter((el) => {
            return el === extname;
        });
        if (imgs.length !== 0) {
            cb(null, true);
        } else {
            cb(new Error('the file must be a imgage'));
        }
    }
});

module.exports = upload;
