import database from "../config/database.js"

class Dog {
    constructor() {
        this.model = database.db.define("dogs", { //LEMBRAR BELONGSTO, HASMANY
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nameDog: {
                type: database.db.Sequelize.STRING
            },
            breed: {
                type: database.db.Sequelize.STRING
            },
            dateBirth: {
                type: database.db.Sequelize.DATEONLY
            },
            microchipped: {
                type: database.db.Sequelize.BOOLEAN
            }
        })
    }
}

export default new Dog()