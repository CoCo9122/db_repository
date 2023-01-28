// https://www.fenet.jp/dotnet/column/language/5109/

const mysql = require('mysql');

const port = 3306
const host = "localhost"
const user = "user"
const password = "password"
const database = "mysql000db"

const connection = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database
})

connection.connect(function(err) {
    if (err) throw err
    console.log('Connected')
})

connection.query(
    'SELECT * FROM items',
    (err, results) => {
        if (err) throw err
        console.log(results)
    }
)

const newItem = {name: 'banana'}

connection.query(
    'INSERT INTO items SET ?', newItem,
    (err, result) => {
        if(err) throw err;
        console.log('Last insert ID:', result.insertId);
    }
)

connection.query(
    'SELECT * FROM items',
    (err, results) => {
        if (err) throw err
        console.log(results[results.length-1])
    }
)