database.add("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(255));");
database.add("CREATE TABLE IF NOT EXISTS Employees (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE, position VARCHAR(255), password VARCHAR(255));");
database.add("CREATE TABLE IF NOT EXISTS Departements (id SERIAL PRIMARY KEY, name VARCHAR(255) UNIQUE);");
module.exports = database;
sql = database.get();
sql.forEach((query) => {
    console.log(query);
});
