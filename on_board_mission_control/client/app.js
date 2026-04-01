const socket = io("http://localhost:5000");

socket.on("telemetry", (data) => {
  document.getElementById("temp").innerText = data.temperature;
  document.getElementById("pres").innerText = data.pressure;
  document.getElementById("alt").innerText = data.altitude;
  document.getElementById("vel").innerText = data.velocity;

  
  const consoleBox = document.getElementById("console");
  consoleBox.innerHTML += `<p>${JSON.stringify(data)}</p>`;
  consoleBox.scrollTop = consoleBox.scrollHeight;
});