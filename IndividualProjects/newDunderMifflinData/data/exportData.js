const { log, error } = require('console');
const fs = require('fs');
const path = require('path');

exports.exportedData = () => {
    try {
        const dataPath = path.join(__dirname, 'data.json');
        const data = fs.readFileSync(dataPath, 'utf-8');

        return JSON.parse(data)
    } catch {
        log('Error al leer el archivo', error.menssge);
        return null
    }
}

exports.exportSalaries = () => {
    try {
        const dataPath = path.join(__dirname, 'salaries.json');
        const salary = fs.readFileSync(dataPath, 'utf-8');

        return JSON.parse(salary);
    } catch {
        log('Error al leer el archivo', error.menssge);
        return null
    }
}