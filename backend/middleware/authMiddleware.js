const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Expect Authorization: Bearer <token>
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Kein Token angegeben' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Ungültiges Token-Format' });
  }

  const token = parts[1];

  jwt.verify(token, process.env.JWT_SECRET || 'secret-placeholder', (err, payload) => {
    if (err) {
      return res.status(403).json({ error: 'Token ungültig oder abgelaufen' });
    }

    // Payload enthält mindestens die user-id
    req.userId = payload.id;
    next();
  });
};
