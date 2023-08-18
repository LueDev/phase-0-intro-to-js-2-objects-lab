// Write your solution in this file!
let employee = {
    name : "defaultName",
    streetAddress : "defaultAddress"
};

function updateEmployeeWithKeyAndValue(emp, key, value){
    const newEmployee = {...emp};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value){
    emp[key] = value;
    return emp;
}

function deleteFromEmployeeByKey(emp, key){
    const newEmployee = {...emp};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(emp, key){
    delete emp[key];  //destructive way of deleting from object.
    return emp;
}