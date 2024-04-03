CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL
);

-- Création de la table article
CREATE TABLE article (
    id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, content TEXT NOT NULL, creation_datetime DATETIME NOT NULL, user_id INT, FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE message (
    id INT AUTO_INCREMENT PRIMARY KEY, sender_id INT, receiver_id INT, content TEXT, TIMESTAMP DATETIME DEFAULT CURRENT_TIMESTAMP, Foreign Key (sender_id) REFERENCES user (id), Foreign Key (receiver_id) REFERENCES user (id)
);

-- Création des utilisateurs
INSERT INTO
    user (email, password, username)
VALUES (
        'admin@gmail.com', 'secret', 'admin'
    ),
    (
        'renaud@gmail.com', 'carola', 'Renaud'
    ),
    (
        'paul@gmail.com', 'climbing', 'Paul'
    ),
    (
        'india@gmail.com', 'cacolac', 'India'
    );