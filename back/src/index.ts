import httpServer from './api/httpServer';
// rest of the code remains same

const PORT = 4003;

httpServer.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
