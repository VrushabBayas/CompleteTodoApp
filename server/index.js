var mysql = require('mysql');
var express = require('express');
const app = express();

var dbConn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'todoapp'
});

dbConn.connect(function(err) {
	if (err) throw err;

	console.log('Connection to database has estabilished...!');
});

const port = process.env.PORT || 3001;

app.get('/getallTodos', (req, res) => {
	let sql = 'select * from myTodos';
	dbConn.query(sql, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

app.delete('deleteTodo/:id', (req, res) => {
	let sql = `delete from myTodos where todo_id=${req.params.id}`;

	dbConn.query(sql, (err, result) => {
		if (err) {
			console.log(err);
			throw err;
		}

		object = {
			status: 200,
			message: 'Todo removed sucessfully.',
			result: result
		};
		res.send(object);
	});
});

app.post('/addTodo/:name/:desc/:date', (req, res) => {
	let sql = `insert into myTodos (todo_name,todo_desc,date) values ('${req.param.name}','${req.param.desc}','${req
		.param.date}')`;
	dbConn.query(sql, (err, result) => {
		if (err) throw err;

		object = {
			status: 200,
			message: 'Record inserted successfully.'
		};
		res.send(object);
	});
});

app.listen(port, () => {
	console.log('Server has started...!');
});
