class AccessToken {
    constructor(id, userId, expiresAt) {
      this.id = id;
      this.userId = userId;
      this.expiresAt = expiresAt;
    }
  
    static generate(userId) {
      // Generar un token JWT
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION,
      });
  
      // Crear una nueva instancia de AccessToken
      return new AccessToken(
        // Generar un ID único
        uuid.v4(),
        userId,
        // Fecha de expiración
        Date.now() + process.env.JWT_ACCESS_TOKEN_EXPIRATION * 1000,
      );
    }
  }
  

  class RefreshToken {
    constructor(id, userId, expiresAt) {
      this.id = id;
      this.userId = userId;
      this.expiresAt = expiresAt;
    }
  
    static generate(userId) {
      // Generar un token JWT
      const token = jwt.sign({ userId }, process.env.JWT_REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
      });
  
      // Crear una nueva instancia de RefreshToken
      return new RefreshToken(
        // Generar un ID único
        uuid.v4(),
        userId,
        // Fecha de expiración
        Date.now() + process.env.JWT_REFRESH_TOKEN_EXPIRATION * 1000,
      );
    }
  }
module.exports = {
    AccessToken,
    RefreshToken,
  };