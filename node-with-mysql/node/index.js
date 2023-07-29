const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require("mysql2/promise");
const { faker } = require('@faker-js/faker');

async function addRecord() {
    const connection = await mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values("${faker.person.fullName()}")`
    await connection.query(sql)

    connection.end()
}

async function getRecords() {
    const connection = await mysql.createConnection(config);
    const sql = `SELECT name FROM people`
    const [rows] = await connection.query(sql);
    connection.end()
    return rows || [];
}

app.get('/', async (req,res) => {
    try {        
        const tableRecords = await getRecords();
        res.send(`<h1>Full Cycle</h1>
        - Lista de nomes cadastrada no banco de dados (${tableRecords.length}): 
        ${tableRecords.map((row) => `<p>${row.name}</p>`).join('\n')}
    `)
    } catch (error) {
        console.error(error);
        res.send(`
            <h1>Full Cycle</h1>
            <p>Erro ao buscar nomes no banco de dados</p>
        `);
    }
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
    addRecord();
})