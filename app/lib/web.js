module.exports = {
    listen: function(express){
        var path = require('path');
        var http = require('http');

        var app = express();
        var config = require('../config/server.js');

        // all environments
        app.set('views', path.join(__dirname, '../ui/views'));
        app.set('view engine', 'ejs');
        app.use(express.json());

        app.use(express.static(path.join(__dirname, '../ui')));

        var server = http.createServer(app);
        server.listen(config.server.port);

        app.get('/', function(req, res){
            res.render('index', {title:"Aquaponic", ip:config.server.host} );
        });

        return server;
    }
};
