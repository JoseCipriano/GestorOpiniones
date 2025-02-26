import { Router } from "express"
import { check } from "express-validator"
import { addCategory , getCategory, deleteCategory, updateCategory } from "./category.controller.js"
import { validarJWT } from "../middlewares/validar-jwt.js";
import { ExpressValidator } from "express-validator";
import { hasRoles } from "../middlewares/validate-roles.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();

router.get("/", getCategory)

router.post(
    "/addCategory",
    [
        validarJWT,
        hasRoles("ADMIN_ROLE"),
        check("nameCategory").notEmpty().withMessage("The name category is required"),
        check("descriptionCategory").notEmpty().withMessage("The description is required"),
        validarCampos

    ],

    addCategory
)


router.put(
    "/updateCategory/:id",
    [
        validarJWT,
        hasRoles("ADMIN_ROLE"),
        check("id").isMongoId().withMessage("It is not a valid ID"),
        check("descriptionCategory").optional().notEmpty().withMessage("Description is required"),
        validarCampos
    ],

    updateCategory




)

router.delete(
    "/deleteCategory/:id",
    [
        validarJWT,
        hasRoles("ADMIN_ROLE"),
        check("id").isMongoId().withMessage("It is not a valid ID"),
        validarCampos


    ],

    deleteCategory


)

export default router;