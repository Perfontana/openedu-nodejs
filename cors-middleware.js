module.exports = {
  cors: (_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
    );
    next();
  },
};
