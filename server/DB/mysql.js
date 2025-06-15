import mysql from 'mysql2';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "eE0583246911",
  database: "music_app", 
});

con.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + con.threadId);
});

export default con;
