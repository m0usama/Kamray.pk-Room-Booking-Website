const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const multer = require('multer');
const path = require('path');
const roomRoute = require('./routes/room');
const authRoute = require('./routes/auth');
dotenv.config();
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use(express.json());
mongoose
  .connect('mongodb://localhost:27017/kamray', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log('Connted to database'))
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

//app.use('/updateprofile', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/room', roomRoute);

app.listen('5000', () => {
  console.log('backend connected');
});
