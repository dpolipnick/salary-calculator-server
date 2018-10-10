

let express = require('express');

let app = express();

let port = 5000;

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port', port);
});