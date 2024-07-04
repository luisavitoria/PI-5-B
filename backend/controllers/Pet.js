import { where } from "sequelize";
import HealthUnity from "../models/HealthUnity.js"
import { Pet } from "../models/Pet.js"



export const getAll = async (req, res) => {
    try {
        const pets = await Pet.findAll();
        return res.status(200).send(pets)
    } catch (error) {
        console.error(error)
    }
}


export const getById = async (req, res) => {
    try {
        const pets = await Pet.findAll({
            where: {
              id: req.params.id,
            },
          });
        return res.status(200).send(pets[0])
    } catch (error) {
        console.error(error)
    }
}



export const save = async (req, res) => {
    try {
        const name = req.body.name
        const age = req.body.age
        const description = req.body.description
        const weight = req.body.weight
        const color = req.body.color
        const image = req.file.filename
        const available = 'Y'

        console.log(req.file)


        await Pet.update(
            { image: image },
            {
              where: {
                id: 1,
              },
            },
          );

        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório!' })
            return
        }

        if (!age) {
            res.status(422).json({ message: 'A idade é obrigatória!' })
            return
        }

        if (!weight) {
            res.status(422).json({ message: 'O peso é obrigatório!' })
            return
        }

        if (!color) {
            res.status(422).json({ message: 'A cor é obrigatória!' })
            return
        }

        

    } catch (error) {
        console.error(error)
    }
}