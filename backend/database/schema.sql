
CREATE TABLE reader (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL
);


CREATE TABLE mountain_article (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  content TEXT NOT NULL
);


CREATE TABLE reading_mountain_article (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  reader_id INT NOT NULL,
  article_id INT NOT NULL,
  opinion TEXT NOT NULL,
  FOREIGN KEY (reader_id) REFERENCES reader(id),
  FOREIGN KEY (article_id) REFERENCES mountain_article(id)
);


INSERT INTO reader (email, password, username) VALUES
('mallory@gmail.com', 'everest', 'malo'),
('inox@gmail.com', 'everest', 'ines');


INSERT INTO mountain_article (title, author, content) VALUES 
('Les sommets majestueux des Alpes', 'Jean Dupont', 'Un article sur les sommets majestueux des Alpes.'),
('Les défis de l'escalade en Himalaya', 'Alice Martin', 'Un article sur les défis de l'escalade en Himalaya.');


INSERT INTO reading_mountain_article (reader_id, article_id, opinion) VALUES 
(1, 1, "Un article intéressant sur les Alpes."),
(1, 2, "Fascinant ! Je rêve de gravir les sommets de l'Himalaya."),
(2, 1, "J'aime lire sur les montagnes, merci pour cet article.");


