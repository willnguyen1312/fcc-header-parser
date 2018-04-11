module.exports = router => {
  router.use("/*", require("./handleAll"));
};
