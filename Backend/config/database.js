require('dotenv').config()

module.exports = {
  username: process.env.DB_USERNAME || "ADMIN",
  password: process.env.DB_PASSWORD || "*17971077j",
  database: process.env.DB_DATABASE || "cademinhagrana",
  host: process.env.DB_HOST ||"localhost",
  dialect:process.env.DB_DIALECT ||"mysql",
  define: {
    timestamps: false, 

    underscored: true
  }
}