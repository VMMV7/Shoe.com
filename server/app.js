const express = require('express');
const app = express();
const port = 2042;


app.listen(port, () => {
    console.log('app is listening to port', port)
})