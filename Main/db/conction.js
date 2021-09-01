const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
  {
    host: '',
  //  use your user here
    user: '',
    // use your password here
    password: '',
    database: 'CMS_db',
  },
  
);
db.connect(function(err){
    if (err){
throw err
    }
})
module.exports = db