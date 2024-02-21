const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.issues[0].message;
    console.log(err);
    res.status(400).json(message);
  }
};

module.exports = validate;
