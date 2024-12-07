const adminMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-admin-key'];
    
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(403).json({ 
        error: 'Access denied. Admin authorization required.' 
      });
    }
    
    next();
  };
  
  module.exports = adminMiddleware;