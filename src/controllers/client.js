import ServiceClient from "../services/client.js"

class ControllerClient {
    async GetAll(req, res) {
        try {
            const clients = await ServiceClient.GetAll()

            res.status(200).send({data: clients})
        } catch (error) {
            
        }
    }
    async GetOne(req, res) {
        try {
            const id = req.params.id
            const client = await ServiceClient.GetOne(id)

            res.status(200).send({data: client})
        } catch (error) {
            
        }
    }
    async Create(req, res) {
        try {
            const {nameClient, phone} = req.body
            await ServiceClient.Create(nameClient, phone)

            res.status(201).send()
        } catch (error) {
            
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id
            const {nameClient, phone} = req.body
            await ServiceClient.Update(id, nameClient, phone)

            res.status(200).send()
        } catch (error) {
            
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceClient.Delete(id)

            res.status(204).send()
        } catch (error) {
            
        }
    }
}

export default new ControllerClient()