import {
  generateMnemonicPhrase,
  getSolanaAdress,
  getMemonicSeed,
} from "../helpers";

class WalletService {
  createWallet() {
    const seedPhrase = generateMnemonicPhrase();

    const seed = getMemonicSeed(seedPhrase);

    const solana = getSolanaAdress(seed);

    return { phrase: seedPhrase, solana: solana };
  }
}

export default WalletService;
