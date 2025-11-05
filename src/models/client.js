import database from "../config/database.js"

class Client {
    constructor() {
        this.model = database.db.define('clients', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            phone: {
                type: database.db.Sequelize.INTEGER,
                unique: true
            }
        })
    }
}

export default new Client()