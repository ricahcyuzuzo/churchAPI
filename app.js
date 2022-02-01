const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*'}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    return next();
});


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to MUHIMA SDA Attendance API',
        code: 200
    });
});

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found!',
        code: 404
    });
})

app.listen(port, () => console.log('The server is running on port http://127.0.0.1:' + port));

module.exports = app;
