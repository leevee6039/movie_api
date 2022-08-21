const jwtSecret = 'your_jwt_secret'; // Must be the same key used in the JWTStrategy

const jwt = require('jsonwebtoken'),
  passport = require('passport');

require('./passport.js'); // local passport file

/**
 * creates JWT (expring in 7 daya, using HS256 algorithm to encode)
 * @param {object} user
 * @returns user object, jwt, and additional information on token
 */

let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, // username encoded in the JWT
    expiresIn: '7d', //
    algorithm: 'HS256', // algorithm used to “sign” or encode the values of the JWT
  });
};

// POST login.
/**
 * handles user login, generating a jwt upon login
 * @function generateJWTToken
 * @param {*} router
 * @returns user object with jwt
 * @requires passport
 */
module.exports = (router) => {
  router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user,
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
};
