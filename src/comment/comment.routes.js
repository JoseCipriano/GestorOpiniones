import { Router } from "express";
import {validarJWT} from "../middlewares/validar-jwt.js"
import { hasRoles } from "./validate-roles.js"
import { validarCampos} from "../middlewares/validar-campos.js"
import { addComment, deleteComment,  updateComment } from "./comment.controller.js";
import { userCommentUpdate, userCommentDelete } from "../helpers/db-validator.js";
import { check } from "express-validator";

const router = Router();

router.post(
    "/publication/:uid/addComment",
    [
        validarJWT,
        hasRoles("USER_ROLE", "ADMIN_ROLE"),
        validarCampos,

    ],
    addComment
)


router.put(
    "/updateComment/:uid",
    [
        validarJWT,
        hasRoles("USER_ROLE", "ADMIN_ROLE"),
        check("uid").custom(userCommentUpdate),
        validarCampos
        
    ], 
    updateComment
)

router.delete(
    "/deleteComment/:uid",
    [
        validarJWT,
        hasRoles("USER_ROLE", "ADMIN_ROLE"),
        check("uid").custom(userCommentDelete),
        validarCampos,

    ],
    
    deleteComment


)







export default router;