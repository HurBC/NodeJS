const dunder = require('../models/database');

//Empresa
const dunderMifflin = new dunder.DunderMifflin();

//sedes
const scranton = new dunder.Branches('Scranton', '+1 555-123-4567', '123 Calle Main Scranton');
const newYork = new dunder.Branches('New York', '+1 555-987-6543', '456 Broadway St. Nueva York');
const stamford = new dunder.Branches('Stamford', '+1 555-777-8888', '789 Centro St. Stamford');
const Santiago = new dunder.Branches('Santiago', '+569 9439 2005', '1, PADRE ALONSO OVALLE 1618, OFICINA B, SANTIAGO CHILE');

//Products
const paperBond = new dunder.Products("Papel bond", "Papel bond de alta calidad para impresión y escritura.", 5000, 0.10);
const paperPhotograhic = new dunder.Products("Papel fotográfico", "Papel fotográfico brillante para impresiones de alta resolución.", 2000, 0.08);
const desktopItems = new dunder.Products("Articulos de escritorio.", "Una variedad de articulos escenciales para la oficina, como boligrafos, lapices, carpetas, etc", 10000, 1.50);
const ItemTest = new dunder.Products("Articulos de test", "Una variedad de articulos test para la oficina, como boligrafos, lapices , carpetas, etc", 10000, 1.50);

//staff
const MichaelScott = new dunder.Employee('Michael', 'Scott', 41);
const JimHalpert = new dunder.Employee('Jim', 'Halpert', 28);
const DwightSchrute = new dunder.Employee('Dwight', 'Schrute', 36);
const KevinMalone = new dunder.Employee('Kevin', 'Malone', 34);

module.exports = {
    dunderMifflin,
    scranton,
    newYork,
    stamford,
    Santiago,
    paperBond,
    paperPhotograhic,
    desktopItems,
    ItemTest,
    MichaelScott,
    JimHalpert,
    DwightSchrute,
    KevinMalone
}