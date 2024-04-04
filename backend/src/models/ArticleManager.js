const AbstractManager = require("./AbstractManager");

// ici logique des requêtes SQL

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "mountain_article" });
  }

  async create(article) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (title, author, summary) VALUES (?, ?, ?)`,
      [article.title, article.author, article.summary]
    );
    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(article) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET title=?, author =?, summary=? WHERE id=?`,
      [article.title, article.author, article.summary, article.id]
    );
    return rows;
  }

  async destroy(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = ArticleManager;
