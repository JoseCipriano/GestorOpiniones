# GestorOpiniones
Es un gestor de Opiniones con java script 

-REGISTRAR USUARIO 
 POST `/gestorOpiniones/v1/auth/register`

   **Body **

   - `name`: Nombre del usuario
   - `surname`: Apellido
   - `username`: Nombre de usuario
   - `email`: Correo electrónico
   - `password`: Contraseña
   - `profilePicture`: Imagen de perfil (archivo)
   - `phone`: Teléfono

-LOGIN
POST `/gestorOpiniones/v1/auth/login`

   *Body (JSON):*
   
   {
     "username": " ",
     "password": " "
   }
   ```
-- ActualizarContraseña
PATCH `/gestorOpiniones/v1/user/updatePassword`

   Body (JSON):

   {
     "oldPassword": "12345678",
     "newPassword": "123456789"
   }
-- ActualizarUsuario
PUT `/gestorOpiniones/v1/user/updateUser`

   Body (JSON):
   {
     "name": "Nuevo Nombre",
     "username": "NuevoUsername",
     "phone": "12345678"
   }

-- agregarCategoria

POST `/gestorOpiniones/v1/category/addCategory`

   Body (JSON):
 
   {
     "nameCategory": "Literatura",
     "descriptionCategory": "Libros"
   }

--listarCategorias

 GET `/gestorOpiniones/v1/category/`

-- actualizarContraseña

 PUT `/gestorOpiniones/v1/category/updateCategory/:id`

   Body (JSON):

   {
     "descriptionCategory": "Nueva descripción"
   }

--eliminarCategoria
DELETE  `/gestorOpiniones/v1/category/deleteCategory/:id`

--AgregarPublicacion

POST `/gestorOpiniones/v1/publication/addPublication`

   Body (JSON):

   {
     "title": "Título de la publicación",
     "keeper": "Categoría",
     "textPublication": "Contenido de la publicación"
   }

--listarPublicaciones

GET `/gestorOpiniones/v1/publication/`

--EliminarPublicacion
DELETE `/gestorOpiniones/v1/publication/deletePublication/:id`



incluir el 2 token 






















