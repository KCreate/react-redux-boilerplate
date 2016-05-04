// Dependencies
const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const cimpression   = require('cimpression');

const app           = express();
const port          = 3000;

// Webpack dependencies, do not include in production
const webpackConfig = require('../webpack.config.js');
if (!config.production) {
    const webpack               = require('webpack');
    const webpackDevMiddleware  = require('webpack-dev-middleware');
    const webpackHotMiddleware  = require('webpack-hot-middleware');
    const compiler              = webpack(webpackConfig);
}

// App configuration
app.enable('strict routing');
app.disable('x-powered-by');
app.use(compression());

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Webpack middleware, do not include in production
if (!config.production) {
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
    }));
    app.use(webpackHotMiddleware(compiler));
}

// Routes
app.use(express.static('./dist'));
app.use('/resources', require('./resources.js'));
app.use('/', (req, res) => {
    res.sendFile(path.resolve('./client/app/index.html'));
});

// Listen
console.log('Starting express server on localhost:' + port);
app.listen(port, (err) => {
    if (err) throw err;
    console.log('Express server listening on localhost:' + port);
});
