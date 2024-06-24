# Dunder Mifflin :briefcase:
Dunder Mifflin es una aplicación que se centra en el manejo de datos y modelos para un negocio ficticio llamado "Dunder Mifflin". El proyecto está estructurado en diferentes directorios y archivos que contienen información relevante sobre las clases, datos y funcionalidades del negocio.

## Estructura del directorio: :open_file_folder:
```
DunderMifflinData
   │   README.md
   │
   ├───data
   │       const.js
   │       data.json
   │
   ├───models
   │       database.js
   │
   ├───scripts
   │       app.js
   │
   └───test
           copy.js
           dataCopy.json
```

## Descripción del contenido 	:clipboard:
**data/const.js**
Este archivo es responsable de instanciar las clases y objetos necesarios para el proyecto. Contiene instancias de clases para representar las sedes, productos y empleados de Dunder Mifflin.

**data/data.json**
El archivo JSON contiene una representación inicial de la información de Dunder Mifflin. Incluye detalles sobre el nombre del negocio, información de contacto, la sede principal, las sucursales, productos, gerente y empleados.

**models/database.js**
En este archivo se definen las clases que forman la base del proyecto DunderMifflin. Se presentan las clases DunderMifflin, Employee, Branches y Products, que se utilizan para representar los datos y modelos del negocio.

**scripts/app.js**
Este archivo se encarga de leer el archivo JSON data.json, crear una instancia de la clase DunderMifflin y actualizar el archivo JSON con los datos modificados.

**test/copy.js**
El archivo copy.js es una copia de app.js. Se utiliza para realizar pruebas sin afectar el archivo original.

**test/dataCopy.json**
dataCopy.json es una copia del archivo data.json. Se utiliza para realizar pruebas y modificaciones sin afectar el archivo original.

## Descripción del proyecto
El proyecto DunderMifflin simula el funcionamiento de una empresa de suministros de oficina. Algunas de las funcionalidades que podría incluir son:

- Administración de sedes: Mantener información sobre las diferentes sedes de Dunder Mifflin, como su nombre, número de teléfono y dirección.

- Gestión de productos: Registrar información sobre los productos que Dunder Mifflin ofrece, como nombre, descripción, stock disponible y precio unitario.

- Gestión de empleados: Mantener un registro de los empleados de Dunder Mifflin, incluidos detalles como nombres, apellidos, edad y fecha de nacimiento.

- Asignación de gerente: Designar un empleado como gerente principal de la empresa.

- Actualización de datos: Permitir la actualización de la información en el archivo JSON para reflejar cambios en el negocio.