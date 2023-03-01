const contenedorMsgsMongoDB = require('../classContainer/contenedorMongoDB.js');
const modelMsgs = require('../models/modelMsgs.js');

class MensajesDaoMongoDB extends contenedorMsgsMongoDB {
  constructor() {
    super({
      name: 'mensajes',
      schema: modelMsgs.MsgsSchema,
    });
  }
}

module.exports = MensajesDaoMongoDB;
