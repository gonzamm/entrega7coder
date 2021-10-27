const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

//Midelware
app.use(express.static(__dirname + '/public'));
app.use(express.json()); // body-parser
app.use(express.urlencoded());


//Routes
const produtosRoute = require("./routes/productos");
app.use("/api/products", produtosRoute);
const chatRoute = require("./routes/chat")
app.use("/api/chat", chatRoute);

//Servidor HTTP
const http = require("http");
const server = http.createServer(app);

//Servidor de Socket
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket)=> {
  console.log("Usuario conectado");

  socket.emit("render", "Hola Cliente")
  socket.on("actualizacion", ()=>{
    io.sockets.emit("render", "Actualizacion")
  })
})


//Comienzo Servidor
app.get("/", (req, res)=>{
  res.send("Hola estas en index.js");
})
server.listen(PORT, () => {
  console.log(`Server is run on port ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))