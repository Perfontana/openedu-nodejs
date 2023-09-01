module.exports = {
  cors: (_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  },
};
