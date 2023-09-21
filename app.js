const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/api', routes);

function errorHandler(err, req, res, next) {
    res.status(500).json({
        message: err.message
    });
}
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
