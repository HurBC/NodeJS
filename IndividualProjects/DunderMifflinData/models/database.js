const { log } = require("console");

var date = 2006

class DunderMifflin {
    constructor() {
        this.name = 'Dunder Mifflin';
        this.contact = `info@${this.name}.com`;
        this.principal_Branch = null;
        this.Branches = [];
        this.products = [];
        this.manager = null;
        this.staff = [];
    }

    addEmployee(Employee) {
        this.staff.push(Employee);
    }

    addBranch(Branch) {
        this.Branches.push(Branch);
    }

    addProduct(product) {
        this.products.push(product);
    }

    DELETE(del) {
        for (let i = 0; i < this.staff.length; i++) {
            if (this.staff[i].firstName === del.firstName) {
                this.staff.splice(i, 1);
            }
        }

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === del.name) {
                this.products.splice(i, 1);
            }
        }

        for (let i = 0; i < this.Branches.length; i++) {
            if (this.Branches[i].name === del.name) {
                this.Branches.splice(i, 1);
            }
        }
    }

    addPrincipalBranch(principal) {
        if (this.principal_Branch === null) {
            for (const i of this.Branches) {
                if (i.name === principal.name) {
                    this.principal_Branch = principal
                }
            }
        } else {
            log(`${this.principal_Branch.name} es la sede principal`);
        }
    }

    makeManager(employee) {
        if (this.manager === null) {
            for (const i of this.staff) {
                if (i.name === employee.name) {
                    this.manager = i;
                    break;
                }
            }
        } else {
            log(`${this.manager.firstName} ${this.manager.lastName} es el manager principal`);
        }
    }
}


class Employee {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.born = date - age;
    }

    addToStore(Empresa) {
        Empresa.addEmployee(this);
    }
}

class Branches {
    constructor(Branch, cellphone, direccion) {
        this.name = `Dunder Mifflin ${Branch}`;
        this.cellphone = cellphone;
        this.direction = direccion;
    }

    addToStore(Empresa) {
        Empresa.addBranch(this);
    }
}

class Products {
    constructor(name, description, stock, price) {
        this.name = name;
        this.descripcion = description;
        this.stock_disponible = stock;
        this.precio_unitario = price;
    }

    addToStore(Empresa) {
        Empresa.addProduct(this)
    }
}

module.exports = {
    DunderMifflin,
    Employee,
    Branches,
    Products
}