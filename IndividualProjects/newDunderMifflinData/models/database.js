const { log } = require("console");
const { v4: uuidv4 } = require('uuid');
const { exportSalaries } = require('../data/exportData');

const salary = exportSalaries();

class DunderMifflin {
    constructor() {
        this.name = '';
        this.direction = '';
        this.contact = null; 
        this.principalBranch = null;
        this.branches = [];
        this.products = [];
        this.manager = null;
        this.employees = 0;
        this.staff = [];
    }

    SELECT(sel) {
        if (sel === '*' || sel.toLowerCase() === 'all') {
            log(this)
        } else if (this.hasOwnProperty(sel.toLowerCase())) {
            log(this[sel])
        } else {
            log(`No existe ${sel} dentro de ${this.name}`)
        }
    }

    ADD(Employee) {
        this.staff.push(Employee);
        this.employees++;
        return this
    }

    ADDPRODUCT(Product) {
        this.products.push(Product);
    }

    ADDBRANCH(Branch) {
        this.branches.push(Branch);
    }

    SETPRINCIPALBRANCH(BranchName) {
        for (const branch of this.branches) {
            if (branch.branch.includes(BranchName)) {
                this.principalBranch = branch
            }
        }
    }

    ADDMANAGER(Employee) {
        Employee.position = salary.salaries[0].position;
        Employee.department = salary.salaries[0].department;
        Employee.salary = salary.salaries[0].salary;
        this.manager = Employee
    }

    ADDSALESEMPLOYEE(Employee) {
        for (const i of this.staff) {
            if (i.firstName === Employee.firstName && i.lastName === Employee.lastName && i.age === Employee.age) {
                log(`El empleado ${Employee.firstName} ${Employee.lastName} ya esta registrado en la base de datos de ${this.name}`)
                return
            }
        }

        Employee.position = salary.salaries[1].position;
        Employee.department = salary.salaries[1].department;
        Employee.salary = salary.salaries[1].salary;
        this.ADD(Employee);
        return this
    }

    ADDCOUNTER(Employee) {
        for (const i of this.staff) {
            if (i.firstName === Employee.firstName && i.lastName === Employee.lastName && i.age === Employee.age) {
                log(`El empleado ${Employee.firstName} ${Employee.lastName} ya esta registrado en la base de datos de ${this.name}`)
                return
            }
        }

        Employee.position = salary.salaries[2].position;
        Employee.department = salary.salaries[2].department;
        Employee.salary = salary.salaries[2].salary;
        this.ADD(Employee);
        return this
    }

    ADDRECEPCIONIST(Employee) {
        for (const i of this.staff) {
            if (i.position === 'Recepcionista') {
                log(`Ya hay una recepcionista en  ${this.name}`)
                return
            }
        }

        Employee.position = salary.salaries[3].position;
        Employee.department = salary.salaries[3].department;
        Employee.salary = salary.salaries[3].salary;
        this.ADD(Employee);
        return this
    }

    ADDQUALITYEMPLOYEE(Employee) {
        for (const i of this.staff) {
            if (i.firstName === Employee.firstName && i.lastName === Employee.lastName && i.age === Employee.age) {
                log(`El empleado ${Employee.firstName} ${Employee.lastName} ya esta registrado en la base de datos de ${this.name}`)
                return
            }
        }

        Employee.position = salary.salaries[4].position;
        Employee.department = salary.salaries[4].department;
        Employee.salary = salary.salaries[4].salary;
        this.ADD(Employee);
        return this
    }

    ADDHUMANRESOURCES(Employee) {
        for (const i of this.staff) {
            if (i.firstName === Employee.firstName && i.lastName === Employee.lastName && i.age === Employee.age) {
                log(`El empleado ${Employee.firstName} ${Employee.lastName} ya esta registrado en la base de datos de ${this.name}`)
                return
            }
        }

        Employee.position = salary.salaries[5].position;
        Employee.department = salary.salaries[5].department;
        Employee.salary = salary.salaries[5].salary;
        this.ADD(Employee);
        return this
    }

    ADDCLIENTSERVICE(Employee) {
        for (const i of this.staff) {
            if (i.firstName === Employee.firstName && i.lastName === Employee.lastName && i.age === Employee.age) {
                log(`El empleado ${Employee.firstName} ${Employee.lastName} ya esta registrado en la base de datos de ${this.name}`)
                return
            }
        }

        Employee.position = salary.salaries[6].position;
        Employee.department = salary.salaries[6].department;
        Employee.salary = salary.salaries[6].salary;
        this.ADD(Employee);
        return this
    }
}

class Employee {
    constructor(firstName, lastName, age) {
        this.id = uuidv4().substring(0, 7);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@dundermifflin.com`;
        this.age = age;
        this.born = 2010 - age;

        this.position = '';
        this.department = '';
        this.salary = 0;
        this.phone = '';
        this.address = '';
        this.emergencyContact = '';
        this.skills = [];
    }
}

class Products {
    constructor(name, description, price, stock) {
        this.id = uuidv4().substring(0, 7);
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}

class Branches {
    constructor(Branch, direction, phone){
        this.id = uuidv4().substring(0, 7);
        this.branch = `Dunder Mifflin ${Branch}`;
        this.direction = direction;
        this.contact = {
            phone: phone,
            email: `${Branch.toLowerCase()}@dundermifflin.com`,
            social_media: {
                Facebook: `DunderMifflin${Branch}`,
                Twitter: `@DM${Branch[0]}_contact`,
                Instagram: `dunderMifflin_${Branch.toLowerCase()}`
            }
        }
    }
}

module.exports = {
    DunderMifflin,
    Employee,
    Products,
    Branches
}