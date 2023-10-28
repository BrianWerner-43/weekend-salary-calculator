console.log('JS loaded');

// Setting two global variables for salary and totalSalary
let salary = 0;
let totalSalary = 0;

// Setting a global variable called newEmployeeInfo that is set to an []
let newEmployeeInfo = [];

// Setting up a function called newEmployee that takes in the value of all the inputs
// and also will append the employee info to the DOM
function newEmployee(event) {
    event.preventDefault();
    // Testing the function...Hey it works!
    console.log('Inside the newEmployee function');
    
    // Putting the newEmployeeInfo inputs into an object
    let newEmployee = {
        firstName: document.getElementById('submitFirstName').value,
        lastName: document.getElementById('submitLastName').value,
        id: document.getElementById('submitId').value,
        title: document.getElementById('submitTitle'),
        annualSalary: document.getElementById('submitAnnualSalary')
    }

    document.getElementById('submitFirstName').value = '';
    document.getElementById('submitLastName').value = '';
    document.getElementById('submitId').value = '';
    document.getElementById('submitTitle').value = '';
    document.getElementById('submitAnnualSalary').value = '';
    
    console.log(newEmployee);
    newEmployeeInfo.push(newEmployee);



    

};// end of the newEmployee function

// Write a function called annualSalary that should divide totalSalary by a monthlyTotal
// to give us the monthlyTotal

// Write a function called totalCost with a parameter of mnthly
// This should also check to see if monthly sales exceeds $20k turn monthly total red, if not keep gray

// Write a function called deleteInfo that will delete the rows