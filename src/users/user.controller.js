import {response, request} from "express"
import { hash, verify } from "argon2";
import User from "./user.model.js"

export const updateUser = async (req, res = response) => {
    try {
        
        const { id } = req.params;
        const { _id, username, ...data } = req.body;

        if (username){
            const existeUser =await User.findOne({ username});
            if (existeUser && existeUser._id.toString() !== id) {
                return res.status(400).json({
                    success: false,
                    msg: "Username already exists"
                });
            }

            data.username = username;

        }

        const user = await User.findByIdAndUpdate(id, data, {new: true});

        res.status(200).json({
            succes: true,
            msg: 'El surname del Usuario fue Actualizado',
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar el surname del Usuario',
            error
        })
    }
}


export const updatePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { oldPassword, newPassword } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const concurrentPassword = await verify(user.password, oldPassword);
        if(!concurrentPassword) {
            return res.status(400).json({
                success: false,
                message: 'The current password is incorrect'
            });
        }

        const oldAndNewPassword = await verify(user.password, newPassword);
        if (oldAndNewPassword) {
            return res.status(400).json({
                success: false,
                message: 'The new password cannot be the same as the previous one'
            });
        }

        const encryptedPassword = await hash(newPassword);
        await User.findByIdAndUpdate(id, { password: encryptedPassword }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Contraseña actualizada",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar contraseña",
            error: err.message
        });
    }
};