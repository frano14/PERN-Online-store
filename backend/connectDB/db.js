import pg from "pg";

const { Pool } = pg

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sneakersworld",
    password: "motusdei1",
    port: 5432,
});

pool.connect()
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log(err));

export default pool;