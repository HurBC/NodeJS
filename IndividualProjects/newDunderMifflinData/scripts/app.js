const { log } = require('console');
const { exportedData } = require('../data/exportData');
const fs = require('fs');
const base = require('../models/database')

const data = exportedData();

//datos de Dunder Mifflin
const dun = new base.DunderMifflin();
dun.name = data.name;
dun.direction = data.direction;
dun.contact = data.contact;
dun.principalBranch = data.principalBranch;
dun.branches = data.branches;
dun.products = data.products;
dun.manager = data.manager;
dun.employees = data.employees
dun.staff = data.staff;

//Cambiar datos de Dunder Mifflin
dun.staff[3].phone = "555-456-7890";
dun.staff[3].address = "101 Granja Schrute";
dun.staff[3].emergencyContact = "Mose Schrute (cousin) - 555-654-3210";
dun.staff[3].skills = ["Ventas directas", "Conocimiento de productos", "Autonomía"];


//Ejecutar comandos
dun.SELECT('');

const updateJson = JSON.stringify(dun, null, 4)

fs.writeFile('C:/vsCODE/frameworks/Node_JS/newDunderMifflinData/data/data.json', updateJson, 'utf-8', (err) => {
    if (err) throw err;

    log('Updated data')
})