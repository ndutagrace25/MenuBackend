const fs = require("fs");

module.exports = {
  saveFile(files, result) {
    //   console.log(files)
    if (files.file) {
      const file = files.file;
      const fileName = file.name;

      file.mv(`./uploads/${fileName}`, (err) => {
        if (err) {
          result(err, null);
        } else {
          result(null, { message: "Success" });
        }
      });
    } else {
      result({ error: "Please select a file to upload" }, null);
    }
  },
};
