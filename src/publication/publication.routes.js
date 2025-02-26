import { Router } from "express";
import {  check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { titlePublication } from "../helpers/db-validator.js";
import { addPublication, deletePublication, getPublication, updatePublication } from "./publication.controller.js";
import { publicationExists, userUpdate, userDelete } from "../helpers/db-validator.js";

const router = Router();

router.post(
    "/addPublication",
    [
        validarJWT,
        check("title").notEmpty().withMessage("The title is required"),
        check("title").custom(titlePublication),
        check("textPublication").notEmpty().withMessage("The description is required"),
        validarCampos
    ],

    addPublication

)

router.post("/", getPublication);

router.put(
    "/updatePublication/:uid",
    [
        validarJWT,
        check("uid", "No es un ID válido").isMongoId(),
        check("uid").custom(publicationExists),
        check("uid").custom(userUpdate),
        validarCampos
    ],
    updatePublication
)


router.delete(
    "/deletePublication/:uid",
    [
        validarJWT,
        check("uid", "No es un ID válido").isMongoId(),
        check("uid").custom(publicationExists),
        check("uid").custom(userDelete),
        validarCampos



    ],

    deletePublication



)

export default router;




