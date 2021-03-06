const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const loggedMiddleware = require("../src/middlewares/loggedMiddleware");
const cookie = require("cookie-parser");
const cors = require('cors');
app.use(cors());

const userApi = require("./routes/api/userApi.routes");
const productApi = require("./routes/api/productApi.routes");

const mainRutas = require("./routes/main.routes");
const productsRutas = require("./routes/products.routes");
const usersRutas = require("./routes/users.routes");

// Pasar poder usar los métodos PUT y DELETE
const methodOverride = require("method-override");
//sesiones
const session = require("express-session");

app.use(express.static(path.resolve(__dirname, "../public")));

//implementación EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

//capturar información DE LOS FORMULARIOS
app.use(express.urlencoded({ extended: false }));
app.use(
  session({ secret: "top-secret", resave: false, saveUninitialized: false })
);
app.use(cookie()); //usamos la cookie de manera general
app.use(loggedMiddleware); //llamamos la funcion donde se procesa la cookie y se envia a la vista de EJS
app.use(express.json());

app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use("/api", userApi);
app.use("/api", productApi);

app.use("/", mainRutas);
app.use("/", productsRutas);
app.use("/", usersRutas);



app.listen(port, () => console.log(`Server in port ${port}`));
