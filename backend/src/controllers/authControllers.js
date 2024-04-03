// eslint-disable-next-line import/no-extraneous-dependencies
const argon2 = require("argon2");
// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require("jsonwebtoken");

const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user.length === 0) {
      res.sendStatus(422);
    }

    const verified = await argon2.verify(user[0].password, req.body.password);

    if (verified === true) {
      const token = await jwt.sign(
        {
          sub: user[0].id,
          email: user[0].email,
        },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res
        .cookie("auth", token, {
          httpOnly: true,
          sameSite: "Lax",
        })
        .json({
          msg: "Connexion réussie",
          username: user[0].username,
          id: user[0].id,
          email: user[0].email,
        });
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
