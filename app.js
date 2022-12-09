const express = require('express');
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');

const app = express();
const port = process.env.port || 4000;
app.use('/', express.static('www'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.post('/form', [
  check('name').isLength({ min: 3 }).trim().escape(),
  check('email').isEmail().normalizeEmail(),
  check('age').isNumeric().trim().escape()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  res.send(`${name} ${email} ${age} submitted successfully!`)
});
const server = app.listen(port, function () {
  console.log('Server is running at ', port);
});
