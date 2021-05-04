export default (io) => (req, _, next) => {
  req.io = io;
  next();
};
