const sqlite3 = require("sqlite3").verbose();

const open = async () => {
  const db = await new Promise((resolve, reject) => {
    const db = new sqlite3.Database("./users.db", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });

  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `);

  return db;
};

const getUser = async (email) => {
  const db = await open();
  const rows = await new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users WHERE email = ?`, [email], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  db.close();
  return rows[0];
};

const setUser = async (email, password) => {
  const db = await open();
  await db.run(
    `INSERT INTO users (email, password) VALUES (?, ?) 
    ON CONFLICT(email) DO UPDATE SET password = excluded.password`,
    [email, password],
  );
  db.close();
};

module.exports = { open, getUser, setUser };
