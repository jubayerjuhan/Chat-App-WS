const app = require("express")();
const server = require("http").createServer(app);
const socketio = require("socket.io");

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// run when a client connects
io.on("connection", (socket) => {
  console.log("New WS Connection...");
  io.emit("message", { username: "bot", text: "New User Connected" });

  socket.on("chatMessage", (message) => {
    console.log(message);

    // sending message back to the client
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    io.emit("message", { username: "bot", text: "One User Disconnected" });
  });
});
server.listen(4000, () => console.log("Server Is Listening To Port 4000"));
