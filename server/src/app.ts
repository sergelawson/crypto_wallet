import express, { Request, Response } from "express";
import walletRouter from "./routes/wallet";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/health", (req: Request, res: Response) => {
  res.send(200);
});

app.use(walletRouter);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
