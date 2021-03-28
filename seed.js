const { User, Salary, db } = require('./server/db');

const connector = async () => {
  await db.sync({ force: true })
  console.log('Database has been synced')

  // Create Employees
  const eliot = await User.create({
    name: 'eliot',
    email: 'eliot@email.com',
    password: '1234',
    userType: 'MANAGER',
    salary: 200000, // NOTE: creation function here that grabs salary from Salary table?
    vacationBalance: 25,
    annualBonus: 100000
  })
  const margo = await User.create({
    name: 'margo',
    email: 'margo@email.com',
    password: '1234',
    salary: 150000,
    managerId: 1,
    vacationBalance: 25,
    annualBonus: 100000
  })
  const fen = await User.create({
    name: 'fen',
    email: 'fen@email.com',
    password: '1234',
    userType: 'HR',
    salary: 100000,
    vacationBalance: 25,
    annualBonus: 100000
  })
  const josh = await User.create({
    name: 'josh',
    email: 'josh@email.com',
    password: '1234',
    userType: 'HR',
    salary: 150000,
    managerId: 1,
    vacationBalance: 25,
    annualBonus: 100000
  })
  const kady = await User.create({
    name: 'kady',
    email: 'kady@email.com',
    password: '1234',
    userType: 'EMPLOYEE',
    salary: 150000,
    vacationBalance: 25,
    annualBonus: 100000
  })
  const penny = await User.create({
    name: 'penny',
    email: 'penny@email.com',
    password: '1234',
    userType: 'EMPLOYEE',
    managerId: 1,
    salary: 150000,
    vacationBalance: 25,
    annualBonus: 100000
  })

  // Create Salary table
  const first = await Salary.create({
    salary: 500000,
    userId: 4
  })

  // Log Magic Methods
  // console.log(Object.getPrototypeOf(margo));
};

connector();

/**Manager Magic Methods
 *_isAttribute: [Function],
  getManager: [Function],
  setManager: [Function],
  createManager: [Function],
  getEmployees: [Function],
  countEmployees: [Function],
  hasEmployee: [Function],
  hasEmployees: [Function],
  setEmployees: [Function],
  addEmployee: [Function],
  addEmployees: [Function],
  removeEmployee: [Function],
  removeEmployees: [Function],
  createEmployee: [Function],
  correctPassword: [Function],
  getColleagues: [Function],
  getSalaries: [Function],
  countSalaries: [Function],
  hasSalary: [Function],
  hasSalaries: [Function],
  setSalaries: [Function],
  addSalary: [Function],
  addSalaries: [Function],
  removeSalary: [Function],
  removeSalaries: [Function],
  createSalary: [Function]
 */

  /**Employee Magic Methods
   * _isAttribute: [Function],
  getManager: [Function],
  setManager: [Function],
  createManager: [Function],
  getEmployees: [Function],
  countEmployees: [Function],
  hasEmployee: [Function],
  hasEmployees: [Function],
  setEmployees: [Function],
  addEmployee: [Function],
  addEmployees: [Function],
  removeEmployee: [Function],
  removeEmployees: [Function],
  createEmployee: [Function],
  correctPassword: [Function],
  getColleagues: [Function],
  getSalaries: [Function],
  countSalaries: [Function],
  hasSalary: [Function],
  hasSalaries: [Function],
  setSalaries: [Function],
  addSalary: [Function],
  addSalaries: [Function],
  removeSalary: [Function],
  removeSalaries: [Function],
  createSalary: [Function]
   */

  /**HR Magic Methods
   * _isAttribute: [Function],
  getManager: [Function],
  setManager: [Function],
  createManager: [Function],
  getEmployee: [Function],
  countEmployee: [Function],
  hasEmployee: [Function],
  setEmployee: [Function],
  addEmployee: [Function],
  removeEmployee: [Function],
  createEmployee: [Function],
  getColleagues: [Function],
  getSalaries: [Function],
  countSalaries: [Function],
  hasSalary: [Function],
  hasSalaries: [Function],
  setSalaries: [Function],
  addSalary: [Function],
  addSalaries: [Function],
  removeSalary: [Function],
  removeSalaries: [Function],
  createSalary: [Function]
   */