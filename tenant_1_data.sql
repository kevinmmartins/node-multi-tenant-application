CREATE TABLE users(
  id INT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  address VARCHAR(400)
);

INSERT INTO users(id,first_name, last_name, email, address) VALUES
 (1,'Kevin', 'Martins', 'kevinmmartins@gmail.com', 'BR');
