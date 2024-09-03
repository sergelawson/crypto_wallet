import { NextFunction, Request, Response, Router } from "express";
import WalletService from "../services/wallet.service";

const router = Router();

const walletService = new WalletService();

router.get("/wallet/new", (req: Request, res: Response, next: NextFunction) => {
  const phrase = walletService.createWallet();

  res.json({ phrase: phrase });
});

export default router;
