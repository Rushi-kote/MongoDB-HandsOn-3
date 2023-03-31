const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    salary: Number,
    department: String,
    lastCompany: String,
    lastSalary: Number,
    overallExp: Number,
    contactInfo: String,
    yearGrad: Number,
    gradStream: String
},{ collection: 'employee'});

const employee  =  mongoose.model("employee",employeeSchema);

module.exports = employee;