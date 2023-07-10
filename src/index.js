//Codigo Del Servidor
//Importar Express y mongoose para el servidor y la BD
const express = require('express');
const mongoose = require('mongoose');
//Importar dotenv para las variables de entorno definidas por mi
require('dotenv').config();

//Importar rutas
const userRoutes = require("./routes/user");
const recordRoutes = require("./routes/record");
const notificationRoutes = require("./routes/notification");
const inventoryRoutes = require("./routes/inventory");


//importar app y port
const app = express();
const port = process.env.PORT || 9000;

//middleware (se usa para consultas y guardar informacion en la BD antes de pasar a las cpnsultas)
app.use(express.json());
//middleware de montaje de rutas (se utilizan para definir las rutas)
app.use("/api", userRoutes);
app.use("/api", recordRoutes);
app.use("/api", notificationRoutes);
app.use("/api", inventoryRoutes);


//Mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('DB Connected'))
.catch((error) => console.error('DB Connection Error'));

//usar app.listen para que el servidor escuche
//Listen on port
app.listen(port, () => console.log('server Listening on port', port));


