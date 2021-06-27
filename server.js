const mysql = require('mysql');
const inquirer = require('inquirer');
const pass = require('./config.js');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: pass,
    database: 'employeeDB',
});

connection.connect((err) => {
    if (err) throw err; 
    init();
});

// Prompts the user to initialize the application 
const init = () => {
    inquirer.prompt({
        name: 'option',
        type: 'rawlist',
        message: 'Please select from one of the options below:',
        choices: [
            'Add a department, role, or an employee',
            'View a department, role, or an employee',
            'Update an employee role',
            'Delete a department, role or an employee',
            'Exit the Application!',
        ],
    })
    .then (response => {
        switch(response.option) {
            case 'Add a department, role, or an employee':
                addEntity();
                break;
             case 'View a department, role, or an employee':
                viewEntity();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Delete a department, role or an employee':
                deleteEntity();
                break;
            case 'Exit the Application!':
                connection.end();
                break;
            default: 
            console.log(`Invalid option: ${response.option}`);
            break;
        }
    });
};

// Prompts the user to add the entity of their choice
const addEntity = () => {
    inquirer.prompt({
        name: 'option',
        type: 'rawlist',
        message: 'Enter an entity to add:',
        choices: [
            'Department',
            'Employee Role',
            'Employee',
            'Return to previous prompts!',
        ],
    })
    .then(response => {
        switch (response.option) {
            case 'Department':
                addDepartment();
                break;
            case 'Employee Role':
                addEmployeeRole();
                break;
            case 'Employee':
                addEmployee();
                break;
            case 'Return to previous prompts!':
                init();
                break;
            default: 
            console.log(`Invalid optiion ${response.option}`);
            break;
        }
    });
};

// Add Department
// Add Employee Role
// Add Employee




// Prompts the user to view the entity of their choice
const viewEntity = () => {
    inquirer.prompt({
        name: 'option',
        type: 'rawlist',
        message: 'Enter an entity to view:',
        choices: [
            'Departments',
            'Employee Roles',
            'Employees',
            'Return to previous prompts!',
        ],
    })
    .then(response => {
        switch (response.option) {
            case 'Departments':
                viewDepartments();
                break;
            case 'Employee Roles':
                viewEmployeeRoles();
                break;
            case 'Employees':
                viewEmployees();
                break;
            case 'Return to previous prompts!':
                init();
                break;
            default: 
            console.log(`Invalid optiion ${response.option}`);
            break;
        }
    });
};

/// View Departments
// View Employee Roles
// View Employees



// UPDATE EMPLOYEE ROLE



// Prompts the user to delete the entity of their choice
const deleteEntity = () => {
    inquirer.prompt({
        name: 'option',
        type: 'rawlist',
        message: 'Enter an entity to delete:',
        choices: [
            'Department',
            'Employee Role',
            'Employee',
            'Return to previous prompts!',
        ],
    })
    .then(response => {
        switch (response.option) {
            case 'Department':
                deleteDepartment();
                break;
            case 'Employee Role':
                deleteEmployeeRole();
                break;
            case 'Employee':
                deleteEmployee();
                break;
            case 'Return to previous prompts!':
                init();
                break;
            default: 
            console.log(`Invalid optiion ${response.option}`);
            break;
        }
    });
};

/// Delete Departments
// Delete Employee Roles
// Delete Employees