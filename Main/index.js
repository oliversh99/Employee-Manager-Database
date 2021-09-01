// to bring library
const inquirer = require('inquirer');
require('console.table');
const db =require("./db/conction.js");
const sequelize = require('./config/connection');

// const figlet = require('figlet');
// figlet('EMPLOYEE MANAGER', (err, result) => {
//   console.table(err || result)
// });
// this menu function to view qustion and list of option to select
function menu (){
  inquirer
  .prompt([
    {
    type: 'list', 
    message: 'What would you like to do?',
    name: 'menuItem',
    choices: ['View All Emplooyee', 'Add Employee', 'Update Employee Role',
     'View All Role', 'Add Role','View All Department','Add Department',
    'Quit'],
  },]).then(answer =>{
    // switch js
    switch (answer.menuItem) {
      // ok work
      case 'View All Emplooyee':
        viewAllEmployee () 
        break;
        // ok work
      case 'Add Employee':
        addEmployee ()
        break;
        // ok work 
      case 'Update Employee Role':
        updateEmployeeRole()
        console.log('Bananas are $0.48 a pound.');
        break;
        // ok work
      case 'View All Role':
        viewAllRole ()
        break;
        // ok work 
      case 'Add Role':
        addNewRole ()
        break;
        // ok work
      case 'View All Department':
        viewAllDepartments()
        break;
        case 'Add Department':
          // ok work 
          addNewDepartment()
          break;
        //  not ready
          case 'Quit':
            quit()
            break;
            
      default:
        console.log('Sorry, we are out of ' + '.');
    }
  })
}
// View All Role ok 
function viewAllRole (){
  db.query ("SELECT * FROM role",function(err,result){
    console.table(result);
    menu()
})
}
// add role function ok 
function addNewRole (){ 
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of role?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the salary of the role?',
},
      {
      type: 'list', 
      message: 'which department does the role belong to?',
      name: 'menuItem',
      choices: ['Engineering','Finance','Legal',
      'Sales','Services'],
    },]).then(showmassageadd =>{console.log("Added new role Success to the database")})
    .then(backTomenu =>{menu()})
};
// for Quit ok
function quit(){
   process.exit()
};
// for view all Employee ok
function viewAllEmployee (){
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    menu()
   });
};
// for add department ok
function addNewDepartment(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of department?',
  },]).then(showmassageadd =>{console.log("Added new department to table")})
  .then(backTomenu =>{menu()})
};

// for view all department function
function viewAllDepartments(){
  db.query("SELECT * FROM department;"
  ,function(err,result){
    console.table(result);
    menu()
})
}
// add employee answer ok
function addEmployee (){
   inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the employee first name?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the employee last name?',
},
      {
      type: 'list', 
      message: 'what is the employee role?',
      name: 'menuItem',
      choices: ['Sales Lead','Salesperson','Lead Engineer','Soft Engineer','Account Manager',
      'Accountant','leagal Team Lead','Lawyer','Customer Service'],
    },
    {
      type: 'list', 
      message: 'who is the employee manager?',
      name: 'menuItem',
      choices: ['None','John Doe','Mike Chan','Ashley Rodriguez','Kevin Tupik',
      'Kunal Singh','Malia Brown'],
    },
    // this to bake to menu quistion after answer prompt
  ]).then(backTomenu =>{menu()})
};

// Update Employee Role function 
function updateEmployeeRole() {
  inquirer.prompt([
   {
     type: 'list', 
     message: 'which employee role do you want to update?',
     name: 'menuItem',
     choices: ['None','John Doe','Mike Chan','Ashley Rodriguez','Kevin Tupik',
     'Kunal Singh','Malia Brown'],
   },
   {
    type: 'list', 
    message: 'which role do you want to assign the selected employee?',
    name: 'menuItem',
    choices: ['Sales Lead','Salesperson','Lead Engineer','Soft Engineer','Account Manager',
    'Accountant','leagal Team Lead','Lawyer','Customer Service'],
  },
   // this to bake to menu quistion after answer prompt
 ]).then(showmassageadd =>{console.log("Updated employee role")})
 .then(backTomenu =>{menu()})
};


  // call menu function 
 menu()