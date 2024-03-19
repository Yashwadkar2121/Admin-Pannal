// await schema.parseAsync(req.body) is the line where you use zod to validate the request body data against the define schema.
// https://github.com/colinhacks/zod#parseasync
const validate = (schema) => async (req, res, next) => {
  try {
    // checke the user define value and schema value same or not
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.issues[0].message;
    // console.log(err);
    res.status(400).json(message);
  }
};

module.exports = validate;
