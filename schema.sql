user Authencition ADD
    TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        address varchar(255) NOT NULL,
    );
    TABLE Employees FOREIGN KEY(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        position VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        address varchar(255) NOT NULL,
    );
    TABLE Departements(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
    );