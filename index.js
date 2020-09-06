let express = require('express')
let path = require('path')
let mongoose = require('mongoose')
var config = require('./config/database');
var indexRouter=require('./routes/index');
let app = express()

//configure app to serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')))
app.listen(3000 || process.env.PORT, () => {
  console.log("Server listening on port 3000")
})



//database connection
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use('/api', indexRouter);


module.exports = app;
