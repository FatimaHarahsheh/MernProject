const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require('./server/routes/routes.author')(app);
app.listen(8000, () => console.log(`Listening on port: 8000`) );