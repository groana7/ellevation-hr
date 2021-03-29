// Mock up of models

// OPTION 1
class User {
  constructor(name, email, password, userType, managerId, isAdmin, isHR) {
    this.id = 1;
    this.name = name;
    this.email = email;
    this.password = password;
    this.userType = userType;
    this.managerId = managerId;
    this.isAdmin = isAdmin;
    this.isHR = isHR;
    this.salary = 500000;
    this.annualBonus = 500000;
    this.vacationBalance = 25;
  }
}

class Salary {
  constructor(employeeId, salary, date) {
    this.employeeId = employeeId;
    this.salary = salary;
    this.date = date;
  }
}

// OPTION2 with Three Models
class LoginCredentials {
  constructor(email, password) {
    this.employeeId = 1;
    this.password = password;
  }
}

class User2 {
  constructor(name, userType, managerId, isAdmin, isHR) {
    this.id = 1;
    this.name = name;
    this.userType = userType;
    this.managerId = managerId;
    this.isAdmin = isAdmin;
    this.isHR = isHR;
    this.salary = 500000;
  }
}

class Salary2 {
  constructor(employeeId, salary, date) {
    this.employeeId = employeeId;
    this.salary = salary;
    this.date = date;
    this.annualBonus = 500000;
    this.vacationBalance = 25;
  }
}
