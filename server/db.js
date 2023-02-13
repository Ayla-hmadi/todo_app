const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "Ayla20252026@",
    host : "localhost",
    port : 5432,
    database : "aylatodo"
})

module.exports=pool;