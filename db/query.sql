USE employees_db;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

SELECT title AS 'Job Title', roles.id AS 'Role ID', department.id AS 'Department ID', salary AS 'Salary' FROM department JOIN roles ON department.id = role.department_id; 

SELECT employee.id AS 'EID', first_name AS 'First Name', last_name AS 'Last Name', title AS 'Job Title', department_id AS 'Departments', salary AS 'Salary', manager_id AS 'Manager EID' FROM role JOIN employee ON roles.id = employee.role_id;

UPDATE employee
SET role_id = 5
WHERE id = 2;
SELECT * FROM employee;
