import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/health", (req: Request, res: Response) => {
  res.send(200);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
