const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/google', 
        { target: 'http://localhost:5000/' }
    ));
    app.use(proxy('/api/*', 
        { target: 'http://localhost:5000/' }
    ));
    app.use(proxy('/api/serveys/thanks', 
    { target: 'http://localhost:5000/' }
));
app.use(proxy('/api/serveys/*/*', 
{ target: 'http://localhost:5000/' }
));

app.use(proxy('/api/serveys/webhooks', 
    { target: 'http://localhost:5000/' }
));
}

// "proxy":{
//     "/auth/google":{
//         "target":"http://localhost:5000"
//       }
//     },