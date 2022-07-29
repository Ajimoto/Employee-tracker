const inquirer = require('inquirer');

function menuQuestions() {
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
					'Update Employee',
				],
			},
		])
		.then((answers) => {
			switch (answers.question) {
				case 'View Departments':
					console.log('View Departments selected!');
					viewDepartments();
					break;

				case 'View Roles':
					console.log('View Roles selected!');
					viewRoles();
					break;

				case 'View Employees':
					console.log('View Employees selected!');
					viewEmplyees();
					break;

				case 'Add Department':
					console.log('Add Department selected!');
					addDepartment();
					break;
			}
		});
}
