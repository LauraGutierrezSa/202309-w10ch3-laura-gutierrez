import express from "express";

const port = process.env.PORT ?? 4000;
const app = express();

app.listen(port, () => {
  console.log(`Serve listening in port http://localhost:${port}`);
});

app.use(express.json());

export default app;
