// This file demonstrates our Models as a class

// OPTION 1
class User {
  constructor(name, email, password, userType, managerId, isAdmin, isHR) {
    this.id = 1; // automatically generated, generate a unique id that includes date joined ie: 202110001
    this.name = name; // for brevity will combine first and last name
    this.email = email;
    this.password = password; // will be encrypted
    this.userType = userType; // will be one of the following ['MANAGER', 'EMPLOYEE', 'HR', 'ADMIN']
    this.managerId = managerId; // connected to this.id
    this.isAdmin = isAdmin; // boolean; virtual field not seen in our model(table in other tech)
    this.isHR = isHR; // boolean; virtual field not seen in our model(table in other tech)
    this.salary = 500000 // automatically generated from the most current date in salary history model(table in other tech)
    this.annualBonus = 500000// grabbed from salary history model(table in other tech)
    this.vacationBalance = 25// grabbed from salary history model(table in other tech)
  }
}

class Salary {
  constructor(employeeId, salary, date){
    this.employeeId = employeeId; // foreign key from Employee model(table in other tech)
    this.salary = salary;
    this.date = date; // User model(table in other tech) will generate salary field from the most recent date of this model(table in other tech)
  }
}

// OPTION2 with Three Models
class LoginCredentials {
  constructor(email, password){
    this.employeeId = employeeId; // foreign key from Employee model(table in other tech)
    this.name = name; // for brevity will combine first and last name
    this.password = password; // will be encrypted
  }
}

class User2 {
  constructor(name, email, password, userType, managerId, isAdmin, isHR) {
    this.id = 1; // automatically generated, generate a unique id that includes date joined ie: 202110001
    this.name = name; // for brevity will combine first and last name
    this.userType = userType; // will be one of the following ['MANAGER', 'EMPLOYEE', 'HR', 'ADMIN']
    this.managerId = managerId; // connected to this.id
    this.isAdmin = isAdmin; // boolean; virtual field not seen in our model(table in other tech)
    this.isHR = isHR; // boolean; virtual field not seen in our model(table in other tech)
    this.salary = 500000 // automatically generated from the most current date in salary history model(table in other tech)
  }
}

class Salary2 {
  constructor(employeeId, salary, date){
    this.employeeId = employeeId; // foreign key from Employee model(table in other tech)
    this.salary = salary;
    this.date = date; // User model(table in other tech) will generate salary field from the most recent date of this model(table in other tech)
    this.annualBonus = 500000// grabbed from salary history model(table in other tech)
    this.vacationBalance = 25// grabbed from salary history model(table in other tech)
  }
}