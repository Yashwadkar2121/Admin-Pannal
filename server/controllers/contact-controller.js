const Contact = require("../models/contact-model");

const contactFrom = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message send Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "message send Unsucessfully" });
  }
};

module.exports = contactFrom;
