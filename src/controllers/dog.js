import ServiceDog from "../services/dog.js"

class ControllerDog {
    async GetAll(req, res) {
        try {
            const dogs = await ServiceDog.GetAll()

            res.status(200).send({ data: dogs })
        } catch (error) {
            res.status(500).send({ error: msg })
        }
    }
    async GetOne(req, res) {
        try {
            const id = req.params.id
            const dog = await ServiceDog.GetOne(id)

            res.status(200).send({ data: dog })
        } catch (error) {
            res.status(500).send({ error: msg })
        }
    }
    async Create(req, res) {
        try {
            const { nameDog, breed, dateBirth, microchipped } = req.body
            await ServiceDog.Create(nameDog, breed, dateBirth, microchipped)

            res.status(201).send()
        } catch (error) {
            res.status(500).send("erro")
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id
            const { nameDog, breed, dateBirth, microchipped } = req.body
            await ServiceDog.Update(id, nameDog, breed, dateBirth, microchipped)

            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: msg })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceDog.Delete(id)

            res.status(204).send()
        } catch (error) {
            res.status(500).send("erro")
        }
    }
}

export default new ControllerDog()