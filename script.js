// Primera parte: Inclusión de librería y constante para la conexión:
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'clase20'
});

// Segunda parte: Probar la conexión:
connection.connect((err) => {
    if(!err){
        console.log('Connection Established Successfully');
        // connection.end(); solo tiene que estar descomentado cuando es el último proceso, pero al terminar el proceso hay que comentarlo para parar la conexión
    }else{
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2))
    }
});

// Tercera parte: Consulta simple
// let query = 'SELECT * from tabla1';
// connection.query(query, (err, rows) => {
//     if(err) throw err;
//     console.log('Datos de tabla1: \n', rows);
//     // connection.end();
// });

// Cuarta parte: Inserción con parámetros: esta la comento después de hacerla para que no lo inserte todo el rato
// let insertQuery = 'INSERT INTO ?? (??) VALUES (?)';
// let query2 = mysql.format(insertQuery,["tabla1","campoTexto","Añadido desde Node"]);

// connection.query(query2, (err, response) => {
//     if(err) throw err;
//     console.log(response.insertId);
//     connection.end();
// });

// Quinta parte: Búsqueda con parámetros:
// let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
// let query3 = mysql.format(selectQuery,["tabla1","campoTexto", "Añadido desde Node"]);
// connection.query(query3, (err, data) => {
//     if(err) throw err;
//     console.log(data);
//     // connection.end();
// });

// Sexta parte: Actualización con parámetros:
// let updateQuery = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
// let query4 = mysql.format(updateQuery,["tabla1","campoTexto","Cambiado desde Node","id",1]);
// connection.query(query4, (err, response) => {
//     if(err) throw err;
//     console.log(response);
//     console.log(query4);
//     //connection.end();
// });

// Séptima parte: Borrado con parámetros:
// let deleteQuery = "DELETE FROM ?? WHERE ?? = ?";
// let query5 = mysql.format(deleteQuery, ["tabla1", "id", 2]);

// connection.query(query5, (err, response) => {
//     if(err) throw err;
//     console.log(response);
//     console.log(query5);
//     // connection.end();
// });

// Octava parte: Llamada a procedimientos y funciones:
let pQuery = 'CALL ??';
let pName ="todoTabla1"
let query6 = mysql.format(pQuery,[pName]);
connection.query(query6, (err, response) => {
    if(err) throw err;
    console.log(response);
    console.log(query6);
    // connection.end();
});

let query7 = 'SELECT primerID()';
connection.query(query7, (err, response) => {
    if(err) throw err;
    console.log(response);
    console.log(query7);
    connection.end();
});