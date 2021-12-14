const { Sequelize, DataTypes } = require ('sequelize');
const config = require ('../../config/database');

const db = {}

db.connection = new Sequelize (
    config.database, config.username, config.password, config);

    db.cliente = require ('../models/cliente')(db.connection, DataTypes)
    db.lancamento = require ('../models/lancamento')(db.connection, DataTypes)
    
    
    
    
    
    
    module.exports = db

