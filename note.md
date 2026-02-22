# Socket Patterns

1. Evvelope pattern

- Type-based command: Chat apps, Dashboards, Collaborative tools.
- Topic-based messsages: Sensors, Tickers, Live markets, Sport engines.

2. Data Transfer

- JSON: Easy, Readable, Debuggable, Flexible
  => For readable apps

- Binary: GPS updates, Mouse movement, Audio chunks, Game states
  => For high-speed data

3. Message Routing

- Broadcast: One to all
  => System annoucements, Global alerts, Service status updates
- Unicast: One to one
  => Private messages, User notifications, admin actions
- Multicast: One to many
  => Discord channels, Game lobbies, Live event chats, Collaborative documents

4. Conclusion

- WebSockets: Two-way real-time apps
  - Chat
  - Collaboration
  - Dashboards

- WebRTC: Heavy media, peer-to-peer
  - Voice calls
  - Video calls
  - File transfers

- WebTransport: Ultra low latency streaming
  - High-performance
  - Real-time systems

- SSE: One-way server updates
  - Tickers
  - Feeds
  - Streaming data

Have to answer these questions:

- Does the server need to push updates?
  => Yes: SSE, WebSockets
- Does the client need to talk back
  => Yes: WebSockets
- Is it heavy audio/video or huge data?
  => Yes: WebRTC
