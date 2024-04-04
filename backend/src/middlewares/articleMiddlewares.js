// eslint-disable-next-line import/no-unresolved
const Joi = require("joi");

const checkIfAdmin = (req, res, next) => {
  const currentUser = "admin";

  if (currentUser !== "admin") {
    res.status(400).send("Not access");
  } else {
    next();
  }
};

const minLength = 2;
const maxLength = 200;

const validateArticleInfos = (req, res, next) => {
  const articleSchema = Joi.object({
    title: Joi.string()
      .min(minLength)
      .required()
      .messages({
        "string-min": `title minimun letter have ${minLength} caracter`,
        "string.empty": "add a title ",
        "any.required": "title require",
      }),
    author: Joi.string()
      .min(minLength)
      .required()
      .messages({
        "string.min": `the author have ${minLength} caracter`,
        "any.required": "name is require",
        "string.empty": "name is require",
      }),
    summary: Joi.string()
      .min(minLength)
      .max(maxLength)
      .required()
      .messages({
        "string.min": `the resume have ${minLength} caracter`,
        "any.required": "resume is require",
        "string.empty": "resume is require",
      }),
    // parutionYear: Joi.number().required().messages({
    //   "any.required": "L'année de parution est requise",
    //   "string.empty": "L'année de parution est requise",
    // }),
  });
  const { error } = articleSchema.validate(req.body);

  if (error) {
    console.error(error.details[0].message);
    res.status(400).json({
      msg: error.details[0].message,
    });
  } else {
    next();
  }
};

module.exports = { checkIfAdmin, validateArticleInfos };
