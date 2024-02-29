const path = require("path");

function getPosts(req, res) {
  // res.sendFile(path.join(__dirname, "..", "public", "images", "image.png"));
  res.render("posts", {
    templateName: "post",
  });
}

module.exports = {
  getPosts,
};
