const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const articles = await tables.book.readAll();
    res.json(articles);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await tables.article.read(id);
    res.json(article);
  } catch (err) {
    next(err);
  }
};

// correspond à edit pour modifier la fiche d'un livre
const update = async (req, res, next) => {
  const articleInfos = {
    title: req.body.title,
    author: req.body.author,
    // parutionYear: req.body.parutionYear,
    summary: req.body.summary,
    id: req.params.id,
  };
  try {
    const result = await tables.book.update(articleInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "article not found" });
    } else {
      res.status(200).json({
        msg: "modification succeded",
      });
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const articleInfos = {
    title: req.body.title,
    author: req.body.author,
    // parutionYear: req.body.parutionYear,
    summary: req.body.summary,
  };
  try {
    const result = await tables.article.create(articleInfos);
    console.info(result);
    res.status(200).json({
      msg: "add article with succeded",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.article.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "article not found" });
    } else {
      res.status(200).json({
        msg: "article deleted",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  update,
  add,
  destroy,
};
