const fs = require('fs');
const { log } = require('console');
const dunder = require('../models/database');
const con = require('../data/const')

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const dun = new dunder.DunderMifflin();
    const jsondata = JSON.parse(data);

    dun.principal_Branch = jsondata.principal_Branch;
    dun.Branches = jsondata.Branches;
    dun.products = jsondata.products;
    dun.manager = jsondata.manager;
    dun.staff = jsondata.staff;

    //Modificar dun
    con.ItemTest.addToStore(dun);

    //declarar actualizacione
    const updatejson = JSON.stringify(dun, null, 4);

    //actualizar json de prueba
    fs.writeFile('./data.json', updatejson, 'utf8', (err) => {
        if (err) throw err;

        log('The file has been saved!');
    })
});