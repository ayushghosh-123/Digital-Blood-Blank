import JWT from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.header('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send({
        success: false,
        message: 'Access denied. No token provided.',
      });
    }

    const token = authHeader.split(' ')[1];
    JWT.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(400).send({
          success: false,
          message: 'Invalid token',
        });
      }
      if (!decoded || !decoded.userId) {
        return res.status(400).send({
          success: false,
          message: 'Invalid token payload',
        });
      }
      req.body.userId = decoded.userId;
      next();
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Internal server error',
      error: error.message, // Include the error message for more context
    });
  }
};

export default authMiddleware;
