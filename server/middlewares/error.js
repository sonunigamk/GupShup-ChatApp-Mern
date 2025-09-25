export const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal Server Error";

  res.status(err.statusCode).json({
    sucess: false,
    errMessage: err.message,
  });
};
