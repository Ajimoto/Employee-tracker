const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const contab = require('console.table');
const db = mysql2.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'employees_db',
	},
	console.log(`Connected to the employees_db database.`)
);
function mainMenu() {
	inquirer
		.prompt([
			{
				message: 'Select one',
				type: 'list',
				name: 'mainMenu',
				choices: [
					'View Departments',
					'View Roles',
					'View Employees',
					'Add Department',
					'Add Role',
					'Add Employee',
				],
			},
		])
		.then((answers) => {
			switch (answers.mainMenu) {
				case 'View Departments':
					console.log('View Departments selected!');
					db.query('SELECT * FROM department', function (err, res) {
						if (err) {
							throw err;
						}
						console.table(res);
						mainMenu();
					});
					break;

				case 'View Roles':
					console.log('View Roles selected!');
					db.query('SELECT * FROM role', (err, res) => {
						if (err) {
							throw err;
						}
						console.log(res);
						mainMenu();
					});
					break;

				case 'View Employees':
					console.log('View Employees selected!');
					db.query('SELECT * FROM employee', (err, res) => {
						if (err) {
							throw err;
						}
						console.log(res);
						mainMenu();
					});
					break;

				case 'Add Department':
					console.log('Add Department selected!');
					addDepartment();
					break;

				case 'Add Role':
					console.log('Add role selected!');
					addRole();
					break;
				case 'Add Employee':
					console.log('Add employee selected!');
					addEmp();
					break;
			}
			console.log(answers.mainMenu);
		})
		.catch((err) => {
			throw err;
		});
}
function addDepartment() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'deptName',
				message: 'Type the name of the department you are adding.',
			},
		])
		.then((resp) => {
			db.query(
				`INSERT INTO department(name)
        VALUES(?);`,
				resp.deptName,
				function (err, results) {
					if (err) {
						throw err;
					}
					console.table(results);
					mainMenu();
				}
			);
		});
}
function addRole() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'roleName',
				message: 'Type the title of the role you are adding.',
			},
			{
				type: 'input',
				name: 'salary',
				message: 'Type the salary for this role.',
			},
			{
				type: 'input',
				name: 'depID',
				message: 'Type the ID of the department for this role.',
			},
		])
		.then((resp) => {
			db.query(
				`INSERT INTO role(title, salary, department_id)
        VALUES(?, ?, ?);`,
				[resp.roleName, resp.salary, resp.depID],
				function (err, res) {
					if (err) {
						throw err;
					}
					console.table(res);
					mainMenu();
				}
			);
		});
}
function addEmp() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'firstName',
				message: 'Type employee first name',
			},
			{
				type: 'input',
				name: 'lastName',
				message: 'Type employee last name',
			},
			{
				type: 'input',
				name: 'role',
				message: 'Type role number for this employee.',
			},
			{
				type: 'input',
				name: 'manID',
				message:
					'Type the EID of the manager for this employee, or NULL if they are a manager',
			},
		])
		.then((resp) => {
			db.query(
				`INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES(?, ?, ?,?)`,
				[resp.firstName, resp.lastName, resp.role, resp.manID],
				function (err, results) {
					if (err) {
						throw err;
					}
					console.table(results);
					mainMenu();
				}
			);
		});
}

mainMenu();
