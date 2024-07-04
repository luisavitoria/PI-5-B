import express from "express";
import * as HealthUnityController from "./controllers/HealthUnityController.js";
import * as PetController from "./controllers/Pet.js";
import multer from "multer";
import path from "path";

export const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

router.get('/pets', PetController.getAll)

router.get('/pets/:id', PetController.getById)


router.post('/pet', upload.single('image'), PetController.save)

