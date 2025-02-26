import { Router } from "express";
import { check } from "express-validator";
import { updatePassword, updateUser } from "./user.controller.js";
import { existeUsuarioById } from "../helpers/db-validator.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
import { validarJWT} from "../middlewares/validar-jwt.js"



const router = Router();


router.put(
    "/:id",
    uploadProfilePicture.single('profilePicture'),
    [
        check("id", "No es un ID válido").isMongoId(),
        check("id").custom(existeUsuarioById),
        validarCampos
    ],
    updateUser
)

router.patch(
   
    "/updatePassword/:id",
    uploadProfilePicture.single('profilePicture'),
    [
        check("id", "No es un ID válido").isMongoId(),
        check("id").custom(existeUsuarioById),
        validarCampos
    ],
    updateUser

)


export default router;