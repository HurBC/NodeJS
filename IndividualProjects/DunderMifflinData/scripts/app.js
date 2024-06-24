const fs = require('fs');
const { log } = require('console');
const dunder = require('../models/database');
const con = require('../data/const')

fs.readFile('../data/data.json', 'utf8', (err, data) => {
    if (err) throw err;

    //intanciar el objeto DunderMifflin
    const dun = new dunder.DunderMifflin();
    const jsondata = JSON.parse(data);

    //asiganar datos al objeto a partir del json
    dun.principal_Branch = jsondata.principal_Branch;
    dun.Branches = jsondata.Branches;
    dun.products = jsondata.products;
    dun.manager = jsondata.manager;
    dun.staff = jsondata.staff;

    //Modificar dun

    //declarar actualizacione
    const updatejson = JSON.stringify(dun, null, 4);

    //actualizar json
    fs.writeFile('../data/data.json', updatejson, 'utf8', (err) => {
        if (err) throw err;

        log('The file has been saved!');
        log('This is the file you can see in the console:')
        log(dun);
    })
});