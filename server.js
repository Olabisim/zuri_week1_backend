const   express = require('express'),
        app = express(),
        port = 7000;

app.listen(port, () => {
        console.log('server is running on 7000')
})