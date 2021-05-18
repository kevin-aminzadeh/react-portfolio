const mailService = require("../services/mailService");

module.exports = {
  send: (req, res) => {
    if (!req.body) res.status(400).json({ Error: "Invalid request data!" });
    try {
      // Create Mail object from request data
      const mail = {
        from: { name: "Portfolio Website", address: process.env.EMAIL },
        to: process.env.EMAIL,
        subject: `Contact form submission from ${req.body.name} at ${req.body.email}`,
        text: req.body.message,
      };

      mailService.send(mail).then((err, success) => {
        if (err) throw err;
        res.status(200).json({ status: "Success" });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
