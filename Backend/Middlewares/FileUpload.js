const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

function FileUpload(req, res, next) {
  const uploadSingle = upload.single("image");

  uploadSingle(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (req.file) {
      req.body.imagePath = req.file.path;
    }
    next();
  });
}

module.exports = FileUpload;
