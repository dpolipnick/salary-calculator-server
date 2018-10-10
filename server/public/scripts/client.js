console.log('JS is working.');
$(document).ready(readyNow);

class Employee{
    constructor(fName, lName, idNumber, jobTitle, annualSalary){
    this.fName=fName;
    this.lName=lName;
    this.idNumber=idNumber;
    this.jobTitle=jobTitle;
    this.annualSalary=annualSalary;
    }//contructor
}//end Employee class

let employeeArray= [];

function readyNow() {
    console.log('jQuery is working.');
    $('#addButton').on('click', getInfo);
    $('#chart').on('click', '.deleteEmployee', deleteEmployee);
}//end readyNow fuction

function getInfo() {
    event.preventDefault();
    console.log('Button Clicked!');
    let fNameIn=$('#fName').val();
    let lNameIn=$('#lName').val();
    let idNumberIn=$('#idNumber').val();
    let jobTitleIn=$('#jobTitle').val();
    let annualSalaryIn=$('#annualSalary').val();
    let newEmployee = new Employee(fNameIn, lNameIn, idNumberIn, jobTitleIn, annualSalaryIn);
    employeeArray.push(newEmployee);
    console.log('New Employee Added');
    updateChart();
    clearForm();
    updatePayroll();
}//end getInfo function

function updateChart() {
    console.log('Inside updateDom function');
    $('#chart').empty();
    for (let employee of employeeArray) {
        $('#chart').append('<li>'+ 'First Name: ' + employee.fName+ ' Last Name: ' + employee.lName+ ' ID#' + employee.idNumber+ ' Job Title: ' + employee.jobTitle+ ' Annual Salary $' + employee.annualSalary + '<button class="deleteEmployee">Delete</button></li>');
    }//end for of loop
}//end updateDom function

function clearForm() {
    $('#fName').val('');
    $('#lName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}//end clearForm function

function updatePayroll() {
    let payroll = 0;
    parseInt(payroll);
    for (let payCheck of employeeArray) {
        console.log(`Employee's Paycheck: $`, payCheck.annualSalary);
        payroll = payroll + parseInt(payCheck.annualSalary);
        console.log('New Payroll:', payroll);
    }//end for of loop
    $('#payroll').empty();
    $('#payroll').append(`<h3>$` + payroll + `</h3>`);
    if (payroll>20000) {
        $('#payroll').empty();
        $('#payroll').append(`<h3 class="red">$` + payroll + `</h3>`);
    }//end if statement
}//end updatePayroll function

function deleteEmployee() {
    console.log('delete!');
    let selectedItem = $(this).parent().text();
    console.log(selectedItem);
    for(let i = 0; i < employeeArray.length; i++) {
        if(selectedItem.includes(employeeArray[i].fName)){
            console.log('delete me!');
            employeeArray.splice(i, 1);
            $(this).parent().remove();
            updatePayroll();
            return true;
        }// end if statement
    }//end for statement
}//end delete function