USE employeeDB;

INSERT INTO department (name)
VALUES 
("IT"), 
("Research and Development"), 
("Finance"), 
("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES 
("Software Developer", 170000, 1), 
("Network Administrator/Engineer", 150000, 1),
("IT Project Manager", 160000, 1),
("R&D Specialist", 86000, 2),
("Financial Manager", 180000, 3),
("Accountant", 97000, 3),
("Recruiting Manager", 80000, 4),
("HR Coordinator", 54000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
()

