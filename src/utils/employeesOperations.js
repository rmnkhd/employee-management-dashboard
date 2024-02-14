import { employeesData } from "@/mockData/data";

// Remove Employee
function removeEmployeeById(id) {
    const indexToRemove = employeesData.findIndex(employee => employee.id === id);
    if (indexToRemove !== -1) {
        employeesData.splice(indexToRemove, 1);
        console.log(`Employee with ID ${id} removed successfully.`);
    } else {
        console.log(`Employee with ID ${id} not found.`);
    }
}
// Example usage:
// removeEmployeeById(3); // Remove employee with ID 3


// Update Employee
function updateEmployee(id, newData) {
    const employeeToUpdate = employeesData.find(emp => emp.id === id);
    if (!employeeToUpdate) {
        console.log("Employee not found.");
        return;
    }

    // Validate new data
    if (!isValidEmployeeData(newData)) {
        console.log("Invalid employee data. Employee not updated.");
        return;
    }

    // Update employee data
    Object.assign(employeeToUpdate, newData);
    console.log("Employee updated successfully.");
}
// // Example usage:
// updateEmployee(1, {
//     name: "John",
//     family_name: "Doe",
//     gender: "male",
//     phone: "123-456-7890",
//     email: "john.doe@example.com"
// });

//Add Employee
function addEmployee(employee) {
    // Generate a random ID
    employee.id = generateRandomId();

    if (isValidEmployeeData(employee)) {
        employeesData.push(employee);
        console.log("Employee added successfully.");
    } else {
        console.log("Invalid employee data. Employee not added.");
    }
}

// Example usage:
// addEmployee({
//     name: "John",
//     family_name: "Doe",
//     gender: "male",
//     phone: "123-456-7890",
//     email: "john.doe@example.com"
// });


// validations
function isValidName(name) {
    return typeof name === 'string' && name.trim().length > 0;
}

function isValidGender(gender) {
    return ['male', 'female', 'prefer not to say'].includes(gender);
}

function isValidPhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidEmployeeData(employee) {
    return (
        isValidName(employee.name) &&
        isValidName(employee.family_name) &&
        isValidGender(employee.gender) &&
        isValidPhone(employee.phone) &&
        isValidEmail(employee.email)
    );
}



// helper functions
function generateRandomId() {
    return Math.floor(Math.random() * 10000);
}