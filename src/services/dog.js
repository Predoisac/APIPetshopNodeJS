import Dog from "../models/dog.js"

class ServiceDog {
    async GetAll() {
        const dogs = await Dog.model.findAll()

        return dogs
    }
    async GetOne(id) {
        const dog = await Dog.model.findByPk(id)

        return dog
    }
    async Create(nameDog, breed, dateBirth, microchipped) {
        await Dog.model.create({ nameDog, breed, dateBirth, microchipped })
    }
    async Update(id, nameDog, breed, dateBirth, microchipped) {
        const dog = await Dog.model.findByPk(id)

        dog.nameDog = nameDog || dog.nameDog
        dog.breed = breed || dog.breed
        dog.dateBirth = dateBirth || dog.dateBirth
        dog.microchipped = microchipped || dog.microchipped

        await dog.save()
    }
    async Delete(id) {
        const dog = await Dog.model.findByPk(id)

        await dog.destroy()
    }

}
export default new ServiceDog()