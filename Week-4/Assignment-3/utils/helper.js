function tryCatchHandler(callback) {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

function validateUserDataFormat(req, res) {
  const { email, password } = req.body;

  const PASSWORDMINLENGTH = 4;

  const emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
  const passwordLength = new RegExp(`^.{${PASSWORDMINLENGTH},}$`);

  let isValid = true;

  //cut off '/' from request url
  const originalPath = req.originalUrl.slice(1);

  if (!emailFormat.test(email)) {
    res.locals.error[originalPath].push('Invalid email');
    isValid = false;
  }
  if (!passwordLength.test(password)) {
    res.locals.error[originalPath].push(`Password should be at least ${PASSWORDMINLENGTH} characters.`);
    isValid = false;
  }

  return isValid;
}

module.exports = {
  tryCatchHandler,
  validateUserDataFormat,
};
