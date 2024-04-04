-- Table pour les lecteurs
CREATE TABLE reader (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL
);

-- Table pour les articles de montagne
CREATE TABLE mountain_article (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  content TEXT NOT NULL
);

-- Table pour les lectures des articles de montagne par les lecteurs
CREATE TABLE reading_mountain_article (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  reader_id INT NOT NULL,
  article_id INT NOT NULL,
  opinion TEXT NOT NULL,
  FOREIGN KEY (reader_id) REFERENCES reader(id),
  FOREIGN KEY (article_id) REFERENCES mountain_article(id)
);

