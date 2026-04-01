module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected");

    setInterval(() => {
      const data = {
        temperature: (Math.random() * 100).toFixed(2),
        pressure: (Math.random() * 10).toFixed(2),
        altitude: (Math.random() * 1000).toFixed(2),
        velocity: (Math.random() * 500).toFixed(2)
      };

      socket.emit("telemetry", data);
    }, 1000);
  });
};