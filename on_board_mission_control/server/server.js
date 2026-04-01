const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

const telemetryRoute = require("./routes/telemetry");
app.use("/api/telemetry", telemetryRoute);


require("./sockets/telemetrySocket")(io);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});