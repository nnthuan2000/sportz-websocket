import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

// 0: CONNECTING
// 1: OPEN (The only state where you can safely .send())
// 2: CLOSING
// 3: CLOSED

// Connection event
wss.on('connection', (socket, request) => {
  const ip = request.socket.remoteAddress;

  socket.on('message', (rawData) => {
    // rawData is buffer (binary data)
    const message = rawData.toString();

    console.log({ rawData });

    wss.clients.forEach((client) => {
      // 1: OPEN
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Server broadcast: ${message}`);
      }
    });
  });

  socket.on('error', (err) => {
    console.error(`Error: ${err}: ${ip}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log(`Websocket server is live on ws://localhost:8080`);
