const express = require('express');
const payload = require('payload');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;
const SECRET = process.env.SECRET;

payload.init({
  secret: SECRET,
  mongoURL: MONGO_URL,
  express: app,
});

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}/admin`);
});
