console.log('JS loaded');

// Setting a global variable for totalMonthly
let totalMonthly = 0;

// Setting up a function called newEmployee that takes in the value of all the inputs
// and also will append the employee info to the DOM
function newEmployee(event) {
    event.preventDefault();
    // Testing the function...Hey it works!
    console.log('Testing the newEmployee function:');
    
    // Getting the inputs from our ids
    let firstName = document.getElementById('submitFirstName').value;
    let lastName = document.getElementById('submitLastName').value;
    let id = document.getElementById('submitId').value;
    let title = document.getElementById('submitTitle').value;
    let annualSalary = document.getElementById('submitAnnualSalary').value;
    
    console.log('Test inputs');


     // Append items to the DOM
     document.getElementById('employeeInfo').innerHTML +=  `
    
     <tr>
     <td>${firstName}</td>
     <td>${lastName}</td>
     <td>${id}</td>
     <td>${title}</td>
     <td>${annualSalary}</td>
     <td><button onclick="deleteInfo(event)">Delete</button></td>
     </tr>`
      
    
      // These will clear the inputs  
    document.getElementById('submitFirstName').value = '';
    document.getElementById('submitLastName').value = '';
    document.getElementById('submitId').value = '';
    document.getElementById('submitTitle').value = '';
    document.getElementById('submitAnnualSalary').value = '';

    // Testing to see if info appends
    console.log('Info is appending!!');

    // Incorperating the math logic 
    totalMonthly += (annualSalary/(12));
    console.log(totalMonthly);
    totalMonthly = Number(totalMonthly);
    totalMonthly = Math.floor(totalMonthly);
    console.log(totalMonthly);

    console.log('Inside the newEmployee function:');

    

    // Using a conditional that will determine if the monthly total exceeds $20k
    // it should turn red
    document.getElementById('total').innerHTML = `Total Monthly: $${totalMonthly}`;
      if(totalMonthly > 20000) {
        let footer = document.querySelector('footer');
        console.log(footer);
        footer.classList.add('over-budget')
      }else {
        // let footer = document.querySelector('footer');
        // console.log(footer);
      }

    
};// end of the newEmployee function



// Write a function called deleteInfo that will delete the rows
function deleteInfo(event) {
    console.log('Testing the delete function:');
    event.target.parentElement.parentElement.remove();

};