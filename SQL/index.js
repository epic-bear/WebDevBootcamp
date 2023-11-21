import Client from "pg";

const db = new Client({
    user: "username",
    host: "localhost",
    database: "mydatabase",
    password: "password",
    port: 5432,
});

db.connect();

db.query("SELECT * FROM Users", (err, res) => {
    if (err) {
        console.error("Error", err.stack);
    } else {
        console.log("User data:", res.rows);
    }

    db.end();
})