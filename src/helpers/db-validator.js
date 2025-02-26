import User from '../users/user.model.js';

export const esRoleValido = async (role = '') => {

    
}
export const existenteEmail = async (correo = ' ') => {

    const existeEmail = await User.findOne({ correo });

    if(existeEmail){
        throw new Error(`El correo ${ correo } ya existe en la base de datos`);
    }
}

export const existeUsuarioById = async (id = '') => {
    const existeUsuario = await User.findById(id);

    if(!existeUsuario){
        throw new Error(`El ID ${id} no existe`);
    }
}

export const userUpdateProfile = async (uid = "", { req }) => {
    try{   
        if (!req.usuario) {
            throw new Error("Usuario no autenticado");
        }

        const user = await User.findById(uid);
        if(!user) {
            throw new Error("User not found");
        }

        if (user._id.toString() !== req.usuario._id.toString()){
            throw new Error("You can't update this profile");
        }
    }catch(error){
        throw new Error(error.message);
    }
};

export const titlePublication = async (title = "") => {
    const existe = await Publication.findOne({title});
    if(existe){
        throw new Error(`There is already a publication with that ${title}`);
    }
};


export const publicationExists = async (uid = " ") => {
    const existe = await Publication.findById(uid);
    if(!existe){
        throw new Error("No existe la publicación con el ID proporcionado");
    }
};


export const userUpdate = async (uid = "", { req }) => {
    try{   
        if (!req.usuario) {
            throw new Error("Usuario no autenticado");
        }

        const publication = await Publication.findById(uid);
        if(!publication) {
            throw new Error("Publication not found");
        }

        if (publication.creator.toString() !== req.usuario._id.toString()){
            throw new Error("You can't update this post");
        }
    }catch(error){
        throw new Error(error.message);
    }
};




export const userDelete = async (uid = "", { req }) => {
    try{   
        if (!req.usuario) {
            throw new Error("Usuario no autenticado");
        }

        const publication = await Publication.findById(uid);
        if(!publication) {
            throw new Error("Publication not found");
        }

        if (publication.creator.toString() !== req.usuario._id.toString()){
            throw new Error("You can't delete this post");
        }
    }catch(error){
        throw new Error(error.message);
    }
};

export const userCommentUpdate = async (uid = "", { req }) => {
    try{   
        if (!req.usuario) {
            throw new Error("Usuario no autenticado");
        }

        const comment = await Comment.findById(uid);
        if(!comment) {
            throw new Error("Comment not found");
        }

        if (comment.creator.toString() !== req.usuario._id.toString()){
            throw new Error("You can't update this comment");
        }
    }catch(error){
        throw new Error(error.message);
    }
};


export const userCommentDelete = async (uid = "", { req }) => {
    try{   
        if (!req.usuario) {
            throw new Error("Usuario no autenticado");
        }

        const comment = await Comment.findById(uid);
        if(!comment) {
            throw new Error("Comment not found");
        }

        if (comment.creator.toString() !== req.usuario._id.toString()){
            throw new Error("You can't delete this comment");
        }
    }catch(error){
        throw new Error(error.message);
    }
};