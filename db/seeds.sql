USE employees_db;

INSERT INTO department(name)
VALUES('Sales'),
('Maintenace'),
('Accounting');

INSERT INTO role(salary, title, department_id)
VALUES(5400, 'Sales Lead', 1),
(6040, 'Salesman', 1),
(1100, 'Janitor Manager', 2),
(8900, 'Janitor', 2),
(700, 'Numbers Manager', 3),
(3056, 'Numbers Guy', 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('AJ', 'Gentz', 1, NULL),
('Tress', 'Whitfield', 2,NULL),
('Devin', 'Gentz', 3, NULL),
('Asmon', 'Gold', 4, NULL),
('Frodo', 'Baggins', 5, NULL),
('Gandalf', 'TheGrey', 6, NULL);

