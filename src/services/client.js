import Client from "../models/client.js"

class ServiceClient {
    async GetAll() {
        const clients = await Client.model.findAll()

        return clients
    }
    async GetOne(id) {
        const client = await Client.model.findByPk(id)

        return client
    }
    async Create(nameClient, phone) {
        await Client.model.create({ nameClient, phone })
    }
    async Update(id, nameClient, phone) {
        const client = await Client.model.findByPk(id)

        client.nameClient = nameClient
        client.phone = phone

        await client.save()
    }
    async Delete(id) {
        const client = await Client.model.findByPk(id)

        await client.destroy()
    }
}

export default new ServiceClient()